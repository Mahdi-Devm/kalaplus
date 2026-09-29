"use client";

import {
  addLikeLocal,
  likeIdsVar,
  likesVar,
  removeLikeLocal,
  setLikes,
} from "@/core/features/like/lib/likeStore";
import {
  CREATE_LIKE,
  GET_MY_LIKES,
  REMOVE_LIKE,
} from "@/core/gql-shcema/actionLikeSchema.gql";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client/react";
import { useCallback, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { GetMyLikesQuery } from "../assets/@types/like/LikeType";

export interface LikeTarget {
  id: string;
  title: string;
  slug: string;
  price: string;
  discountPercent: string;
  stock: string;
  mainImage: string;
  category?: { id: string; title: string };
}

function buildLocalLike(product: LikeTarget, likeId: string) {
  return {
    id: likeId,
    productId: product.id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    product: { ...product },
  };
}

/**
 * Seeds the shared like store from the GET_MY_LIKES query.
 *
 * Mount this exactly once (Header favorites UI) — the query is cached and
 * deduped by Apollo, and every consumer reads the same reactive vars.
 */
export function useFavorites() {
  const { data, loading, error, refetch } = useQuery<GetMyLikesQuery>(
    GET_MY_LIKES,
    {
      fetchPolicy: "cache-and-network",
    },
  );

  const likes = data?.likes;

  useEffect(() => {
    if (likes) {
      setLikes(likes);
    }
  }, [likes]);

  const favorites = useReactiveVar(likesVar);

  return {
    favorites,
    count: favorites.length,
    loading: loading && !favorites.length,
    error,
    refetch,
  };
}

/**
 * Shared like/unlike logic for product cards, sliders, the product page
 * and the favorites dropdown.
 *
 * LikeController_remove requires the Like entity id (not the productId),
 * so the productId -> likeId mapping kept in the reactive store is used
 * for unlike. LikeController_create returns only a message, so after a
 * successful create the likes list is refetched to resolve the real id.
 *
 * Updates are optimistic through the shared store, so Shop, sliders and
 * the Header favorites badge stay synchronized without extra requests.
 */
export function useLike(product?: LikeTarget) {
  const [createLike, { loading: creating }] = useMutation(CREATE_LIKE);
  const [removeLike, { loading: removing }] = useMutation(REMOVE_LIKE);

  const likeIds = useReactiveVar(likeIdsVar);
  const liked = product ? Boolean(likeIds[product.id]) : false;

  const toggleLike = useCallback(async () => {
    if (!product) return;

    const existingLikeId = likeIdsVar()[product.id];

    if (existingLikeId) {
      // Optimistic unlike — heart clears immediately everywhere.
      removeLikeLocal(existingLikeId);

      try {
        await removeLike({ variables: { id: existingLikeId } });
      } catch (error) {
        addLikeLocal(buildLocalLike(product, existingLikeId));
        toast.error(getErrorMessage(error));
      }
      return;
    }

    // Optimistic like — heart fills immediately everywhere.
    const tempLikeId = `temp-like-${product.id}`;
    addLikeLocal(buildLocalLike(product, tempLikeId));

    try {
      await createLike({
        variables: { input: { productId: product.id } },
        // LikeController_create returns only a message, so resolve the
        // real like id afterwards by refreshing the likes list.
        refetchQueries: [{ query: GET_MY_LIKES }],
      });
    } catch (error) {
      removeLikeLocal(tempLikeId);
      toast.error(getErrorMessage(error));
    }
  }, [product, createLike, removeLike]);

  return useMemo(
    () => ({
      liked,
      toggleLike,
      pending: creating || removing,
    }),
    [liked, toggleLike, creating, removing],
  );
}

/** Reactive count for the Header badge. */
export function useFavoriteCount() {
  return useReactiveVar(likesVar).length;
}

"use client";

import type { LikeType } from "@/core/assets/types/like/LikeType";
import { makeVar } from "@apollo/client";

export const likesVar = makeVar<LikeType[]>([]);

export const likeIdsVar = makeVar<Record<string, string>>({});

export function setLikes(likes: LikeType[]) {
  likesVar(likes);

  const ids: Record<string, string> = {};
  for (const like of likes) {
    ids[like.productId] = like.id;
  }
  likeIdsVar(ids);
}

export function addLikeLocal(like: LikeType) {
  const likes = likesVar();
  if (likes.some((item) => item.id === like.id)) return;

  setLikes([like, ...likes]);
}

export function removeLikeLocal(likeId: string) {
  setLikes(likesVar().filter((like) => like.id !== likeId));
}

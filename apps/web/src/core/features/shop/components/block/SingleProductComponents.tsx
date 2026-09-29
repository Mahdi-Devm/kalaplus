"use client";

import { useSuspenseQuery } from "@apollo/client/react";

import { ImageGallery } from "@/core/components/custom/ui/ImageGallery/ImageGallery";
import { ProductInfo } from "@/core/features/shop/components/ui/single-page/ProductInfo";
import { ProductTabs } from "@/core/features/shop/components/ui/single-page/ProductTabs";
import { GET_ONE_PRODUCTS } from "@/core/features/shop/gql-shcema/ProductSchema.gql";
import { ProductType } from "@/core/assets/@types/product/ProductType";

export default function SingleProductComponents({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = useSuspenseQuery<{
    product: ProductType;
  }>(GET_ONE_PRODUCTS, {
    variables: {
      slug: params.slug,
    },
  });

  const product = data.product;

  const allImages = [product.mainImage, ...product.images];

  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ImageGallery images={allImages} alt={product.title} />

        <ProductInfo product={product} />
      </div>

      <ProductTabs product={product} />
    </>
  );
}

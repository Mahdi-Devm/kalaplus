import { gql } from "@apollo/client";

export const GET_ONE_PRODUCTS = gql`
  query GetOneProduct($slug: String!) {
    product: ProductsController_findOneBySlug(slug: $slug) {
      id
      title
      slug
      categoryId
      description
      shortDescription
      price
      discountPercent
      stock
      mainImage
      images
      colors
      sizes
      materials
      category {
        id
        title
      }
      createdAt
    }
  }
`;

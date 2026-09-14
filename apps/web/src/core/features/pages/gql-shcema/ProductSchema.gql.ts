import { gql } from "@apollo/client";

export const GET_PRODUCTS_FOR_USER = gql`
  query GetProductsForUser(
    $page: Float
    $limit: Float
    $search: String
    $filter_categoryId: String
    $filter_price: String
    $sortBy: [String]
  ) {
    products: ProductsController_listForUser(
      page: $page
      limit: $limit
      search: $search
      filter_categoryId: $filter_categoryId
      filter_price: $filter_price
      sortBy: $sortBy
    ) {
      data {
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
      meta {
        currentPage
        itemsPerPage
        totalPages
        totalItems
      }
      links {
        first
        last
        previous
        next
      }
    }
  }
`;

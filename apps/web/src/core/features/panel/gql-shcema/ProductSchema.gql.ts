import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductDto_Input!) {
    ProductsController_create(input: $input)
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: String!, $input: UpdateProductDto_Input!) {
    ProductsController_updateDetail(id: $id, input: $input)
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    ProductsController_remove(id: $id)
  }
`;
export const GET_PRODUCTS_FOR_ADMIN = gql`
  query GetProductsForAdmin(
    $page: Float
    $limit: Float
    $search: String
    $filter_categoryId: String
    $filter_price: String
    $filter_discountPercent: String
    $sortBy: [String]
  ) {
    products: ProductsController_listForAdmin(
      page: $page
      limit: $limit
      search: $search
      filter_categoryId: $filter_categoryId
      filter_price: $filter_price
      filter_discountPercent: $filter_discountPercent
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

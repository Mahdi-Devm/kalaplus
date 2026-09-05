import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductDto_Input!) {
    ProductsController_create(input: $input)
  }
`;

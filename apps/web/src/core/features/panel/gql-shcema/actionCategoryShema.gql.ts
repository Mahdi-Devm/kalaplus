import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: CreateCategoryDto_Input!) {
    CategoriesController_create(input: $input) {
      id
      title
      slug
      image
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: String!, $input: UpdateCategoryDto_Input) {
    CategoriesController_update(id: $id, input: $input) {
      id
      title
      slug
      image
    }
  }
`;

export const GET_ALL_CATEGORY = gql`
  query GetAllCategories {
    categories: CategoriesController_findAll {
      id
      title
      slug
      image
      createdAt
      updatedAt
    }
  }
`;

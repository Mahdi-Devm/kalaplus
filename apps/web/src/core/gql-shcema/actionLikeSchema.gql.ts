import { gql } from "@apollo/client";

export const LIKE_FIELDS = gql`
  fragment LikeFields on Like {
    id
    productId
    createdAt
    product {
      id
      title
      slug
      price
      discountPercent
      mainImage
      stock
      category {
        id
        title
      }
    }
  }
`;

export const GET_MY_LIKES = gql`
  query GetMyLikes {
    likes: LikeController_findAll {
      ...LikeFields
    }
  }
  ${LIKE_FIELDS}
`;

export const CREATE_LIKE = gql`
  mutation CreateLike($input: CreateLikeDto_Input!) {
    LikeController_create(input: $input)
  }
`;

export const REMOVE_LIKE = gql`
  mutation RemoveLike($id: String!) {
    LikeController_remove(id: $id)
  }
`;

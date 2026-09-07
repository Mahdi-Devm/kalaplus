import { gql } from "@apollo/client";

export const DELETE_IMAGE = gql`
  mutation DeleteImage($url: String!) {
    UploadController_deleteImage(url: $url)
  }
`;

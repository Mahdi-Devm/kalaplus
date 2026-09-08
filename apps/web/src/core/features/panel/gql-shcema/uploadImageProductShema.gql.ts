import { gql } from "@apollo/client";

export const UPLOAD_IMAGES = gql`
  mutation UploadImages($input: UploadController_uploadImages_request_Input!) {
    UploadController_uploadImages(input: $input)
  }
`;

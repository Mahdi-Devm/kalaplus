import { gql } from "@apollo/client";

export const REQUEST_OTP = gql`
  mutation RequestOtp($input: RequestOtpDto_Input) {
    AuthController_ReqOtp(input: $input)
  }
`;

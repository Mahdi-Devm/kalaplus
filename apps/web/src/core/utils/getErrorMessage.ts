export function getErrorMessage(error: any): string {
  if (!error) return "خطای ناشناخته";
  if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    return error.graphQLErrors[0].message || "خطای GraphQL";
  }

  if (error.networkError) {
    return error.networkError.message || "خطای شبکه";
  }

  if (typeof error === "object" && error.message) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "خطایی رخ داد";
}

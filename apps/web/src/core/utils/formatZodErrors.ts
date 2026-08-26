export const formatZodErrors = <T>(
  error: unknown,
): Partial<Record<keyof T, string>> => {
  const errors: Partial<Record<keyof T, string>> = {};

  const zodError = error as {
    issues?: Array<{ path: (string | number)[]; message: string }>;
  };

  if (zodError.issues) {
    zodError.issues.forEach((issue) => {
      const field = issue.path[0] as keyof T;
      errors[field] = issue.message;
    });
  }

  return errors;
};

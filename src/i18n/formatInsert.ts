export const formatInsert = (template: string, ...values: string[]) =>
  template.replace(
    /\$(\d+)/g,
    (placeholder, index) => values[index - 1] ?? placeholder
  );

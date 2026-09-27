export const formatToman = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(Math.round(value));

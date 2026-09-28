export function getFinalPrice(price: number, discount: number) {
  return discount > 0 ? Math.round(price - (price * discount) / 100) : price;
}

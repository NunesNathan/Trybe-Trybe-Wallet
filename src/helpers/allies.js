export function formatName(name) {
  return name.match(/[^/]+/);
}

export function formatPrice(price) {
  return Number(price).toFixed(2);
}

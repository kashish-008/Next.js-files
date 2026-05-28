export function formatPrice(value) {
  if (typeof value !== 'number') {
    return `INR ${value}`;
  }
  const formatted = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return `INR ${formatted}`;
}

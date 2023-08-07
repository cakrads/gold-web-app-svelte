export const formatRupiah = (
  value: number,
  options?: Intl.NumberFormatOptions
): string => {
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    ...options
  }).format(value);
};

export const formatDollar = (
  value: number,
  options?: Intl.NumberFormatOptions
): string => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    ...options
  }).format(value);
};
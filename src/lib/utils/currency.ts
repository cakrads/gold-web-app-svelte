export const formatCurrency = (
	value: number,
	type: 'id-ID' | 'en-US' = 'id-ID',
	options?: Intl.NumberFormatOptions
): string => {
	if (type === 'id-ID') {
		return formatRupiah(value, options);
	}

	return formatDollar(value, options);
};

export const formatRupiah = (value: number, options?: Intl.NumberFormatOptions): string => {
	return Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
		...options
	}).format(value);
};

export const formatDollar = (value: number, options?: Intl.NumberFormatOptions): string => {
	return Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		...options
	}).format(value);
};

export const rupiahToDollar = (rupiah: number, dollarRate: number) => {
	const dollarAmount = rupiah / dollarRate;
	const formattedDollarAmount = dollarAmount.toFixed(2);
	return parseFloat(formattedDollarAmount);
};
export const convertToDate = (epoch: number): Date => {
	const epochStr = epoch.toString();
	if (/^\d{10}$/.test(epochStr)) {
		return new Date(epoch * 1000);
	} else if (/^\d{13}$/.test(epochStr)) {
		return new Date(epoch);
	} else {
		throw new Error('Invalid epoch timestamp');
	}
};

export const convertDate = (epoch: number, type: 'id-ID' | 'en-US' = 'id-ID'): string => {
	const date = convertToDate(epoch);
	const options = new Map([
		['id-ID', convertDateIndo],
		['en-US', convertDateEn]
	]);

	const selectedFunction = options.get(type);
	if (selectedFunction) {
		return selectedFunction(date);
	} else {
		throw new Error(`Invalid type. Supported types are 'ID' and 'EN'.`);
	}
};

const convertDateIndo = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	};

	return date.toLocaleString('id-ID', options).replace(' pukul', ',');
};

const convertDateEn = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZoneName: 'short'
	};

	return date.toLocaleString('en-US', options).replace(' at', ',');
};

export const convertSimpleDate = (epoch: number, type: 'id-ID' | 'en-US' = 'id-ID'): string => {
	const date = convertToDate(epoch);
	const options = new Map([
		['id-ID', convertDateSimpleIndo],
		['en-US', convertDateSimpleEn]
	]);

	const selectedFunction = options.get(type);
	if (selectedFunction) {
		return selectedFunction(date);
	} else {
		throw new Error(`Invalid type. Supported types are 'ID' and 'EN'.`);
	}
};

const convertDateSimpleIndo = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: '2-digit',
		year: '2-digit'
	};

	return date.toLocaleString('id-ID', options);
};

const convertDateSimpleEn = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		month: '2-digit',
		day: '2-digit',
		year: '2-digit'
	};

	return date.toLocaleString('en-US', options);
};

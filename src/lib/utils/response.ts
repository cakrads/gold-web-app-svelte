import { json } from '@sveltejs/kit';

export interface IResponseApi<T> {
	status: number;
	data: T;
	error: boolean;
	message: string;
}

// Function to generate JSON responses with consistent structure
export function apiResponse<T>(status: number, data: T, message: string, error: boolean) {
	const response: IResponseApi<T> = {
		status,
		data,
		error,
		message
	};
	return json(response);
}

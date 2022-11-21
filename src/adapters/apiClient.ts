import { ApiClient } from '../interfaces/apiClient'

class FetchApiClient implements ApiClient {
	baseUrl: string

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
	}

	public get = async <P, R>(url: string, params: P): Promise<R> => {
		const req = await fetch(url)
		return req.json() as Promise<R>
	}
}

export const fetchApiClientFactory = (baseUrl?: string) => {
	return new FetchApiClient(baseUrl || '')
}

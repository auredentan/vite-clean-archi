export interface ApiClient {
    get: <ParamsType, ResponseType>(url: string, params:  ParamsType) => Promise<ResponseType> 
}

import { Store } from './store';

import { store as basicStore } from '../adapters/basicStore';
import { ApiClient } from './apiClient';
import { fetchApiClientFactory } from '../adapters/apiClient';

export let store: Store;
export let apiClient: ApiClient;

export const setupAllContainers = () => {
    store = basicStore
    apiClient = fetchApiClientFactory('https://google.com')
}

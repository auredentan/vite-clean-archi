import { Store } from './store';

import { store as basicStore } from '../adapters/basicStore';

export let store: Store;

export const setupAllContainers = () => {
    store = basicStore
} 

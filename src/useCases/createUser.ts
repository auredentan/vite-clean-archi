import { createUserCall } from '../adapters/api';

import { User } from '../entities/user';

import { store } from '../interfaces/container';

export const createUser = async (user: User) => {
    // Call API
    const createdUser = await createUserCall(user)
    console.log('created user', createdUser)

    // Store in store
    store.addUser(user)
}

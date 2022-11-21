import { User } from '../entities/user'

import { Store } from '../interfaces/store'

export const store: Store = {
    addUser: (user: User) => {
        console.log('Adding user in store', user)
    }
}

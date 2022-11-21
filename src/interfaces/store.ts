import { User } from '../entities/user'

export interface Store {
	addUser: (user: User) => void
}


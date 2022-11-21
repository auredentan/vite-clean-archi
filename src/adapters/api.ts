import { User } from '../entities/user'
import { apiClient } from '../interfaces/container'

export const createUserCall = async (user: User) => {
	return await apiClient.get('https://jsonplaceholder.typicode.com/todos/1', {})
}

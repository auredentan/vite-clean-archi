import { User } from '../entities/user';

export const createUserCall = async (user: User) => {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
}

import { useUser } from '../useCases/useUser'

export const User = () => {
	const { createUser } = useUser()

	return (
		<div>
			User component
			<button onClick={() => createUser({email: 'name', name: 'name'})}>Create user</button>
		</div>
	)
}

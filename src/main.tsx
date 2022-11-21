import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { setupAllContainers } from './interfaces/container'

import './index.css'

setupAllContainers()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

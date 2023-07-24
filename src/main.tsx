import './index.css'
import '../i18n.config.ts'

import { AppRouter } from './router/index.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
)

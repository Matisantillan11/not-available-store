import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashboardModule } from '@root/modules/dashboard/dashboard.module'
import { Layout } from '@root/modules/common/components/layout'
import { ROUTES } from './routes'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={ROUTES.DASHBOARD} Component={DashboardModule}></Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DashboardDetailModule } from '@root/modules/dashboard/dashboard-detail.module'
import { DashboardModule } from '@root/modules/dashboard/dashboard.module'
import { Layout } from '@root/modules/common/components/layout'
import { ROUTES } from './routes'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={ROUTES.DASHBOARD.MAIN} Component={DashboardModule} />
					<Route path={ROUTES.DASHBOARD.DETAIL} Component={DashboardDetailModule} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

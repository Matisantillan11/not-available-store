import { DashboardModule } from './modules/dashboard/dashboard.module'
import { Layout } from '@modules/common/components/layout'

export const App = () => {
	return (
		<Layout>
			<DashboardModule />
		</Layout>
	)
}

import { CartIcon } from '../icons/cart-icon.component'
import { Hamburguer } from './hamburguer.component'
import { HeaderList } from './list/header-list.component'
import { theme } from '../../constants/theme'
export const Header = () => {
	return (
		<div className='fixed bg-transparent z-[1] pl-[15px] pr-[15px] w-full flex justify-between items-center h-[65px] shadow-md'>
			<Hamburguer />
			<p className='text-[24px] text-primary-white font-bold'>NOT AVAILABLE</p>
			<div className='lg:absolute right-5 h-full flex justify-center items-center'>
				<HeaderList />
				<div className='hover:pointer'>
					<CartIcon color={theme.primary.white} width={35} height={35} />
				</div>
			</div>
		</div>
	)
}

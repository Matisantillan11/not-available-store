import { CartIcon } from '../icons/cart-icon.component'
import { Hamburguer } from './hamburguer.component'
import { HeaderList } from './list/header-list.component'
export const Header = () => {
	return (
		<div className='pl-[15px] pr-[15px] w-full flex justify-between items-center h-[45px] bg-primary-white'>
			<Hamburguer />
			<p className=' text-[18px] font-bold'>NOT AVAILABLE</p>
			<div className='lg:absolute right-5 h-full flex justify-center items-center'>
				<HeaderList />
				<div className='hover:pointer'>
					<CartIcon width={25} height={25} />
				</div>
			</div>
		</div>
	)
}

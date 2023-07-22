import { HeaderPopOver } from '../popover/header-popover.component'
import { IPopoverList } from '../../interfaces/popover.interface'
import { IconOne } from '../../icons/icon-1.component'
import { IconThree } from '../../icons/icon-3.component'
import { IconTwo } from '../../icons/icon-2.component'
import { useTranslation } from 'react-i18next'

export const HeaderList = () => {
	const { t } = useTranslation('common')

	const shop: IPopoverList[] = [
		{
			title: t('header.popovers.shop.first.title'),
			link: '/',
			icon: IconOne,
		},
		{
			title: t('header.popovers.shop.second.title'),
			link: '/',
			icon: IconTwo,
		},
		{
			title: t('header.popovers.shop.third.title'),
			link: '/',
			icon: IconThree,
		},
	]

	const drops: IPopoverList[] = [
		{
			title: t('header.popovers.collection.first.title'),
			link: '/',
			icon: IconOne,
		},
	]

	return (
		<ul className='hidden lg:h-full lg:flex lg:justify-center lg:items-center'>
			<li className='font-bold mr-5 hover:pointer'>
				<HeaderPopOver popoverList={drops} title={t('header.items.collection')} />
			</li>
			<li className='font-bold mr-5 hover:pointer'>{t('header.items.new-arrivals')}</li>
			<li className='font-bold mr-5 hover:pointer'>
				<HeaderPopOver popoverList={shop} title={t('header.items.shop')} />
			</li>
		</ul>
	)
}

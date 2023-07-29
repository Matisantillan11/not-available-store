import { CardList } from './components/list/cardList.component'
import { Fragment } from 'react'
import { ParticleBackground } from './components/particles/particle-background.component'
import RENDER from '@modules/common/assets/render.png'
import { SearchInput } from './components/input/search-input.component'
export const DashboardModule = () => {
	return (
		<Fragment>
			<ParticleBackground />
			<div className='fixed w-[100vw] h-[100vh] flex justify-center items-center'>
				<img src={RENDER} width={650} height={650} />
			</div>

			<footer className='fixed w-[100vw] h-[120px]  bottom-0 left-0 flex justify-end items-center px-12'>
				<div className='flex flex-col justify-evenly items-center'>
					<button className='my-2 w-[125px] py-[8px] px-[12px] rounded-[12px] border-solid border-2 border-purple-main text-primary-white font-bold'>
						VER MÁS
					</button>
					<button className='my-2 py-[8px] w-[125px] px-[12px] rounded-[12px] border-solid border-2 border-purple-main bg-purple-main text-primary-white font-bold'>
						COMPRAR
					</button>
				</div>
			</footer>
		</Fragment>
	)
}

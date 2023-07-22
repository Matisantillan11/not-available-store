import { Card } from '../cards/card.component'

export const CardList = () => {
	return (
		<div className='flex justify-center align-center flex-wrap w-full overflow-y-scroll'>
			{Array.from(Array(16).keys())?.map((index) => (
				<Card key={index} />
			))}
		</div>
	)
}

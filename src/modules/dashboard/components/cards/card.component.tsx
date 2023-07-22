import cardImage from '@modules/common/assets/card-template.jpeg'

export const Card = () => {
	return (
		<div className='w-[180px] h-[277px] border-1 border-primary-black border-solid my-[40px] mx-[5px] hover:cursor-pointer lg:w-[350px] lg:h-[540px]'>
			<img
				alt='card-image'
				src={cardImage}
				className='w-[180px] h-[207px] border-1 border-primary-black border-solid lg:w-[350px] lg:h-[425px]'
			/>

			<div className='mt-[12px]'>
				<p className='font-bold'>Campera supreme green</p>
				<p className='text-sm font-normal text-grey-grey50'>Collection 001</p>
				<p className='text-sm font-medium'>$16599</p>
			</div>
		</div>
	)
}

import Image from 'next/image'
import bannerImage from '../../../../../public/images/banner.png'
export const Banner = () => {
	return (
		<div className='w-full h-fit'>
			<Image
				src={bannerImage.src}
				width={bannerImage.width}
				height={bannerImage.height}
				alt='not-available-store-banner'
				className='w-full h-fit'
			/>
		</div>
	)
}

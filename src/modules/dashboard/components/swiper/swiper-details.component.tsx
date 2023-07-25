// Import Swiper styles
import 'swiper/css'
import 'swiper/css/thumbs'

import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Thumbs } from 'swiper/modules'

export interface ISwiperDetails {
	images: string[]
}

export const SwiperDetails: FC<ISwiperDetails> = ({ images }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
	const SPACE_BETWEEN = 10
	const SLIDES_PER_VIEW = 4
	return (
		<>
			<Swiper
				spaceBetween={SPACE_BETWEEN}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Thumbs]}
				className='w-full h-[620px] lg:h-[720px]'>
				{images.map((src, index) => (
					<SwiperSlide key={index} className='h-[620px] lg:h-[720px] w-full'>
						<img src={src} className='h-full w-full object-fill' />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSlideChange={setThumbsSwiper}
				spaceBetween={SPACE_BETWEEN / 2}
				slidesPerView={SLIDES_PER_VIEW}
				modules={[Thumbs]}
				className='w-full h-[90px] mt-[20px] lg:h-[110px] lg:mt-[10px]'>
				{images.map((src, index) => (
					<SwiperSlide key={index} className='h-full w-full '>
						<img src={src} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

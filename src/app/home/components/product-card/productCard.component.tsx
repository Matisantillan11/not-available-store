import Image, { StaticImageData } from 'next/image'

export interface ProductProp {
	id: number
	title: string
	price: string
	images: StaticImageData[]
}

export const ProductCard = ({ product }: { product: ProductProp }) => {
	const { title, price, images } = product
	return (
		<div className='w-full h-fit rounded-lg'>
			<Image src={images[0].src} alt={`product-${title}`} width={images[0].width} height={750} className='rounded-lg' />
			<p className='text-lg uppercase'>{title}</p>
			<p className='text-sm font-light'>{price}</p>
		</div>
	)
}

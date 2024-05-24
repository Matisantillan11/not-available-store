import { Banner } from './home/components/banner'
import { ProductCard } from './home/components/product-card'
import { product_mock } from './home/mock/product_mock'

export default function Home() {
	return (
		<div className='h-screen w-full'>
			<Banner />

			<div className='w-full grid grid-cols-2 gap-2 md:grid-cols-3 px-2 py-8'>
				{product_mock.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</div>
		</div>
	)
}

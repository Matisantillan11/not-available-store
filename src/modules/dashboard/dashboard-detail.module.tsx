import { Combobox, Transition } from '@headlessui/react'

import CardTemplate from '@modules/common/assets/card-template.jpeg'
import CardTemplate2 from '@modules/common/assets/card-template-2.jpeg'
import { ChevronDownIcon } from '../common/components/icons/chevron-down-icon.component'
import { Fragment } from 'react'
import { SearchInput } from './components/input/search-input.component'
import { SwiperDetails } from './components/swiper/swiper-details.component'

export const DashboardDetailModule = () => {
	const images = [
		CardTemplate,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
		CardTemplate2,
	]

	return (
		<div className='py-[50px] px-[10px] lg:p-[50px]'>
			<h3 className='font-bold text-center my-[8px]'>STORE</h3>
			<SearchInput placeholder='Search..' />
			<div className='w-full h-screen h-auto flex flex-col justify-start content-evenly lg:flex-row lg:content-center lg:justify-center lg:mt-10 p-5'>
				<div className='w-full h-[620px] flex flex-col justify-between items-center lg:h-[720px] lg:max-w-[420px] xl:max-w-[580px] 2xl:max-w-[820px] lg:mx-4'>
					<SwiperDetails images={images} />
				</div>

				<div className='w-full h-[420px] lg:h-[620px] xl:max-w-[920px] mt-10 lg:mt-0 flex flex-col justify-between lg:p-10'>
					<div>
						<h2 className='text-[48px] font-bold leading-[52px]'>Campera supreme green</h2>
						<p className='text-[32px] font-extralight text-grey-grey100 '>Collection 001</p>

						<div className='my-[20px]'>
							<p>Talle</p>
							<div className='w-72'>
								<Combobox value='Size'>
									<div className='relative mt-1'>
										<div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border-solid border-2 border-grey-grey50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
											<Combobox.Input
												className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
												displayValue={() => 'Size'}
											/>
											<Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
												<ChevronDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
											</Combobox.Button>
										</div>
										<Transition
											as={Fragment}
											leave='transition ease-in duration-100'
											leaveFrom='opacity-100'
											leaveTo='opacity-0'>
											<Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
												{/* {filteredPeople.length === 0 && query !== '' ? (
													<div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
														Nothing found.
													</div>
												) : ( */}
												<Combobox.Option
													//key={person.id}
													className={({ active }) =>
														`relative cursor-default select-none py-2 pl-10 pr-4 ${
															active ? 'bg-teal-600 text-white' : 'text-gray-900'
														}`
													}
													value={'L'}>
													{({ selected, active }) => (
														<>
															<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>L</span>
															{selected ? (
																<span
																	className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																		active ? 'text-white' : 'text-teal-600'
																	}`}>
																	{/* <CheckIcon className='h-5 w-5' aria-hidden='true' /> */}
																</span>
															) : null}
														</>
													)}
												</Combobox.Option>

												<Combobox.Option
													//key={person.id}
													className={({ active }) =>
														`relative cursor-default select-none py-2 pl-10 pr-4 ${
															active ? 'bg-teal-600 text-white' : 'text-gray-900'
														}`
													}
													value={'XL'}>
													{({ selected, active }) => (
														<>
															<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>XL</span>
															{selected ? (
																<span
																	className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																		active ? 'text-white' : 'text-teal-600'
																	}`}>
																	{/* <CheckIcon className='h-5 w-5' aria-hidden='true' /> */}
																</span>
															) : null}
														</>
													)}
												</Combobox.Option>
											</Combobox.Options>
										</Transition>
									</div>
								</Combobox>
							</div>
						</div>

						<p className='text-[32px] font-semibold'>$12599</p>
						<button className='bg-primary-black text-primary-white font-bold py-3 px-[35px] rounded-[8px] my-[10px]'>
							Agregar al carrito
						</button>
					</div>
					<div className='h-[125px] pt-5'>
						<p className='text-[24px] font-extralight'>Buzo Algodón Rústico</p>
						<p className='text-[24px] font-extralight'>Bordado en frente y en la espalda.</p>
						<p className='text-[24px] font-extralight '>Bolsillo Canguro en Frente</p>
					</div>
				</div>
			</div>
		</div>
	)
}

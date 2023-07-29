import { FC, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { ChevronDownIcon } from '../../icons/chevron-down-icon.component'
import { IHeaderPopover } from '../../interfaces/popover.interface'

export const HeaderPopOver: FC<IHeaderPopover> = ({ title, popoverList }) => {
	return (
		<Popover className='relative'>
			{({ open }) => (
				<Fragment>
					<Popover.Button className='group inline-flex items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-0 lg:focus-visible:ring-0'>
						{title}
						<ChevronDownIcon
							className={`${open ? 'rotate-180 transform' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-primary-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
							aria-hidden='true'
						/>
					</Popover.Button>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-200'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-150'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'>
						<Popover.Panel className='absolute left z-10 mt-3 w-[250px] max-w-sm -translate-x-[125px] transform px-4 sm:px-0 lg:max-w-3xl'>
							<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
								<div className='relative grid gap-8 bg-white p-7 grid-cols-1'>
									{popoverList.map((item) => (
										<a
											key={item.title}
											href={item.link}
											className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50'>
											<div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
												<item.icon aria-hidden='true' />
											</div>
											<div className='ml-4'>
												<p className='text-sm font-medium text-gray-900'>{item.title}</p>
												{/* <p className='text-sm text-gray-500'>{item.description}</p> */}
											</div>
										</a>
									))}
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</Fragment>
			)}
		</Popover>
	)
}

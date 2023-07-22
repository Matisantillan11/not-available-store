import '../styles/input/search-input.styles.css'

import { FC } from 'react'
import { ISearchInput } from '../../interfaces/input/search-input'
import { SearchIcon } from '@modules/common/components/icons/search-icon.component'
import { theme } from '@modules/common/constants/theme'

export const SearchInput: FC<ISearchInput> = (inputProps) => {
	return (
		<div className='flex justify-center items-center'>
			<input {...inputProps} className='search' />
			<div className='search-icon'>
				<SearchIcon className='lg:w-[21px] lg:h-[21px] w-[16px] h-[16px]' color={theme.primary.white} />
			</div>
		</div>
	)
}

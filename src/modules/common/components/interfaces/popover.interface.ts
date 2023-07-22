export interface IHeaderPopover {
	title: string
	popoverList: IPopoverList[]
}

export interface IPopoverList {
	title: string
	link: string
	icon: () => JSX.Element
}

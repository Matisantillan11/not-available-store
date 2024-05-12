import { StoreApi, UseBoundStore, create } from 'zustand'

interface MenuState {
	isOpen: boolean
	open: () => void
	close: () => void
}
export const useMenu: UseBoundStore<StoreApi<MenuState>> = create((set) => ({
	isOpen: false,
	open: () => set(() => ({ isOpen: true })),
	close: () => set(() => ({ isOpen: false })),
}))

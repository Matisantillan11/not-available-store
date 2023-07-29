/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					white: '#F1F1F1',
					black: '#000000',
				},
				grey: {
					grey50: '#AEABAB',
					grey100: '#4F4F4F',
				},
				green: {
					green100: '#253E3B',
				},
				purple: {
					main: '#A25FE3',
				},
			},
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				'primary': '#E8BD70',
				'secondary': '#EDD185',
				'main-text-light': '#060604',
				'base-text-light': '#5D5031',
				'main-bg-light': '#F7F7F7',
				'main-text-dark': '#FFFFFF',
				'base-text-dark': '#BFBFBF',
				'main-bg-dark': '#191919',
			},
		},
	},
	plugins: []
};

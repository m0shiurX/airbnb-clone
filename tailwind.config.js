/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			phone: '650px',
			tablet: '750px',
			laptop: '950px',
			desktop: '1440px',
		},
	},
	plugins: [],
};

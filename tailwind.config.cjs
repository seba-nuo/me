/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#3F4F63',
				secondary: '#FFD700',
				terciary: '#FFB400'
			}
		},
	},
	plugins: [],
}

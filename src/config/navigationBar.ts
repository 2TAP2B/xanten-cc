// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The tailwind astro theme',
		text: 'xanten.cc'
	},
	navItems: [
		{ name: 'Start', link: '/' },
		{ name: 'Apps', link: '/apps' },
		{ name: 'Funktionen', link: '/features' },
		{ name: 'Über', link: '/about' },
		{ name: 'Blog', link: '/blog' },
	//	{
	//		name: 'Resources',
	//		link: '#',
	//		submenu: [
	//			{ name: 'Blog', link: '/blog' },
	//			{ name: 'Changelog', link: '/changelog' },
	//			{ name: 'FAQ', link: '/faq' },
	//			{ name: 'Terms', link: '/terms' }
	//		]
	//	},
		{ name: 'Kontakt', link: '/contact' }
	],
	navActions: [
		//{ name: 'Try it!', link: '/blog', style: 'primary', size: 'lg' }
		]
}

// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'xanten.cc',
		aboutText:
			'Digitale Souveränität - Leicht gemacht!',
		logo: {
			src: '/logo.svg',
			alt: 'www.xanten.cc',
			text: 'xanten.cc'
		}
	},
	footerColumns: [
		{
			category: 'Navigation',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
	//			{
	//				subCategory: 'FAQ',
	//				subCategoryLink: '/faq'
	//			},
	//			{
	//				subCategory: 'Changelog',
	//				subCategoryLink: '/changelog'
	//			},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Über uns',
			subCategories: [
				{
					subCategory: 'Über uns',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'Aktuelles',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Kontakt',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Status',
					subCategoryLink: 'https://status.xanten.cc'
				}
			]
		}
	],
	subFooter: {
		copywriteText: 'Copyright 2025 xanten.cc'
	}
}

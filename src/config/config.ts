// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Xanten Care & Connect - Deine Digtitale Nachbarschaftshilfe',
	siteDescription:
		'Selbstbestimmt im digitalen Raum – für Dich und Deine Privatsphäre. Hier stärken wir gemeinsam Deine digitale Souveränität, indem Du selbst entscheidest, wer Zugang zu Deinen Daten hat. ',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'xanten.cc logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}

// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'mastodon',
		link: 'https://social.xanten.cc',
		icon: 'mastodon-light'
	},
	{
		name: 'twitter',
		link: 'https://github.com/2TAP2B/xanten-cc',
		icon: 'github'
	},
	{
		name: 'matrix',
		link: 'https://element.xanten.cc/',
		icon: 'element'
	}
]

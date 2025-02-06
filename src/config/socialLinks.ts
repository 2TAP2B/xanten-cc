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
		name: 'facebook',
		link: '/',
		icon: 'mastodon-light'
	},
	{
		name: 'twitter',
		link: '/',
		icon: 'github'
	},
	{
		name: 'discord',
		link: '/',
		icon: 'discord-icon'
	}
]

import { slugify } from '../../helper';

const projectData = [
	{
		title: 'easygiveback',
		slug: slugify('easygiveback'),
		link: 'https://easygiveback.de',
		year: 2022,
		intro_text:
			'Building a digital donation platform for non-profit organizations.',
		theme: {
			mainColor: '#D5F0FF',
			textColor: 'light',
		},
		hero_image: '/cover_easygiveback_03.jpg',
		role: ['Front End Development'],
		partner: [],
		stack: [
			'Next.JS',
			'React.JS',
			'Redux',
			'Wordpress CMS',
			'SCSS',
			'Framer Motion',
			'TypeScript',
			'Github',
		],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'Vitalcenter Gerstberger',
		slug: slugify('Vitalcenter Gerstberger'),
		link: 'https://jobs.gerstberger.com',
		year: 2020,
		intro_text: 'Designing a job portal for a local health care supply store.',
		theme: {
			mainColor: '#ed1a3b',
			textColor: 'light',
		},
		hero_image: '',
		role: ['Front End Development', 'UX Design'],
		partner: [
			{
				name: 'Vitalcenter Gerstberger GmbH & Co. KG',
				link: 'https://gerstberger.com',
			},
		],
		stack: ['PHP', 'SCSS', 'JavaScript', 'Wordpress CMS', 'Github'],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'muse case labs',
		slug: slugify('muse case labs'),
		link: 'https://muse-case-labs.com',
		year: 2021,
		intro_text: 'Landingpage for cutting-edge coding & design bootcamps',
		theme: {
			mainColor: '#eee',
			textColor: 'light',
		},
		hero_image: '',
		role: ['Front End Development'],
		partner: [
			{
				name: 'muse case GmbH',
				link: 'https://muse-case.com',
			},
		],
		stack: [
			'Next.JS',
			'React.JS',
			'Prismic CMS',
			'SCSS',
			'Framer Motion',
			'TypeScript',
			'Github',
		],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'Foodorama',
		slug: slugify('Foodorama'),
		link: '',
		year: 2022,
		intro_text: 'Your digital refrigerator to help you find recipies',
		theme: {
			mainColor: '#377631',
			textColor: 'light',
		},
		hero_image: '',
		role: ['App Development', 'UX Design'],
		partner: [],
		stack: ['Swift UI', 'Figma'],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'Astoria West NYC',
		slug: slugify('Astoria West NYC'),
		link: 'https://astoriawestnyc.com',
		year: 2021,
		intro_text:
			'Crafting a unique landingpage for rental apartments in New York City',
		theme: {
			mainColor: '#ffb2a3',
			textColor: 'light',
		},
		hero_image: '/cover_astoria.jpg',
		role: ['Front End Development'],
		partner: [
			{
				name: 'muse case GmbH',
				link: 'https://muse-case.com',
			},
		],
		stack: [
			'Next.JS',
			'React.JS',
			'Prismic CMS',
			'SCSS',
			'Framer Motion',
			'TypeScript',
			'Github',
		],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'amplify',
		slug: slugify('amplify'),
		link: 'https://xd.adobe.com/view/eb762da1-b929-4d52-ae7f-b8e4501158cf-be25/screen/19cd5799-7e34-45a2-b4ae-a21a26d27e36/?fullscreen',
		year: 2020,
		intro_text:
			'Building a digital donation platform for non-profit organizations.',
		theme: {
			mainColor: 'rgb(63,70,153)',
			textColor: 'light',
		},
		hero_image: '/cover_amplify.jpg',
		role: ['UX Design'],
		partner: [],
		stack: ['Adobe XD', 'Design System'],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'Uhland Realschule',
		slug: slugify('Uhland Realschule'),
		link: 'https://uhland-realschule.de/',
		year: 2020,
		intro_text:
			'Building a digital donation platform for non-profit organizations.',
		theme: {
			mainColor: '#009f63',
			textColor: 'light',
		},
		hero_image: '',
		role: ['Front End Development'],
		partner: [
			{
				name: 'muse case GmbH',
				link: 'https://muse-case.com',
			},
		],
		stack: ['PHP', 'SCSS', 'Kirby CMS', 'Github', 'JavaScript'],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
	{
		title: 'Natur Pur',
		slug: slugify('Natur Pur'),
		link: 'http://ap.wnklr.art/',
		year: 2019,
		intro_text: 'Building an interactive playground for a local museum.',
		theme: {
			mainColor: '#466d46',
			textColor: 'light',
		},
		hero_image: '/cover_naturpur_02.jpg',
		role: ['UX Design', 'Branding', 'Front End Development'],
		partner: [],
		stack: ['HTML', 'SCSS', 'JavaScript'],
		description: [
			{
				key: 'challenge',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'approach',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
			{
				key: 'result',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsum. Doloremque, libero maiores quis sed provident qui soluta, iste impedit similique eius nostrum. Libero quaerat suscipit dolorem voluptatem sapiente perspiciatis.',
			},
		],
	},
];

export default projectData;

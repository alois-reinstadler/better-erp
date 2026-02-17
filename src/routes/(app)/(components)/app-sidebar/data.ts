import DashboardIcon from '@lucide/svelte/icons/gauge';
import ChartBarIcon from '@lucide/svelte/icons/chart-bar';
import CalendarIcon from '@lucide/svelte/icons/calendar';
import ContactIcon from '@lucide/svelte/icons/contact';
import MapIcon from '@lucide/svelte/icons/map';

export const user = {
	name: 'shadcn',
	email: 'm@example.com',
	avatar: 'https://shadcn-svelte.com/avatars/shadcn.jpg'
};

export const navigation = {
	overview: {
		label: 'Overview',
		items: [
			{
				label: 'Dashboard',
				href: '/dashboard',
				Icon: DashboardIcon
			},
			{
				label: 'Calendar',
				href: '/calendar',
				Icon: CalendarIcon
			},
			{
				label: 'Map',
				href: '/map',
				Icon: MapIcon
			}
		]
	},
	features: {
		label: 'Features',
		items: [
			{
				label: 'Business Insights',
				href: '/business-insights',
				Icon: ChartBarIcon
			},
			{
				label: 'Customer Relations',
				href: '/customer-relations',
				Icon: ContactIcon
			}
		]
	}
};

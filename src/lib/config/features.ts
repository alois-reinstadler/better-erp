import type { NavigationItem, Icon } from '$lib/utils';

import BuildingIcon from '@lucide/svelte/icons/building';
import UsersIcon from '@lucide/svelte/icons/users';
import ChartBarIcon from '@lucide/svelte/icons/chart-bar';
import ContactIcon from '@lucide/svelte/icons/contact';
import UserSearchIcon from '@lucide/svelte/icons/user-search';
import HandshakeIcon from '@lucide/svelte/icons/handshake';
import FileTextIcon from '@lucide/svelte/icons/file-text';
import FolderOpenIcon from '@lucide/svelte/icons/folder-open';
import UploadIcon from '@lucide/svelte/icons/upload';
import ShoppingCartIcon from '@lucide/svelte/icons/shopping-cart';
import TruckIcon from '@lucide/svelte/icons/truck';
import BookOpenIcon from '@lucide/svelte/icons/book-open';
import WalletIcon from '@lucide/svelte/icons/wallet';
import ReceiptIcon from '@lucide/svelte/icons/receipt';
import ReceiptTextIcon from '@lucide/svelte/icons/receipt-text';
import LandmarkIcon from '@lucide/svelte/icons/landmark';
import PiggyBankIcon from '@lucide/svelte/icons/piggy-bank';
import FileSpreadsheetIcon from '@lucide/svelte/icons/file-spreadsheet';
import UserCogIcon from '@lucide/svelte/icons/user-cog';
import ClockIcon from '@lucide/svelte/icons/clock';
import CalendarOffIcon from '@lucide/svelte/icons/calendar-off';
import BadgeDollarSignIcon from '@lucide/svelte/icons/badge-dollar-sign';
import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
import FactoryIcon from '@lucide/svelte/icons/factory';
import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
import ListTreeIcon from '@lucide/svelte/icons/list-tree';
import CalendarRangeIcon from '@lucide/svelte/icons/calendar-range';
import FolderKanbanIcon from '@lucide/svelte/icons/folder-kanban';
import KanbanIcon from '@lucide/svelte/icons/kanban';
import GanttChartIcon from '@lucide/svelte/icons/gantt-chart';
import FolderIcon from '@lucide/svelte/icons/folder';
import NetworkIcon from '@lucide/svelte/icons/network';
import PackageIcon from '@lucide/svelte/icons/package';
import LinkIcon from '@lucide/svelte/icons/link';
import DollarSignIcon from '@lucide/svelte/icons/dollar-sign';
import FileCheckIcon from '@lucide/svelte/icons/file-check';
import ShoppingBagIcon from '@lucide/svelte/icons/shopping-bag';
import TargetIcon from '@lucide/svelte/icons/target';
import WarehouseIcon from '@lucide/svelte/icons/warehouse';
import PackageSearchIcon from '@lucide/svelte/icons/package-search';
import ArrowLeftRightIcon from '@lucide/svelte/icons/arrow-left-right';
import WorkflowIcon from '@lucide/svelte/icons/workflow';
import PlayIcon from '@lucide/svelte/icons/play';
import CheckCircleIcon from '@lucide/svelte/icons/check-circle';
import ChartPieIcon from '@lucide/svelte/icons/chart-pie';

export const FEATURE_IDS = [
	'business-insights',
	'customer-relationship-management',
	'document-management-system',
	'procurement',
	'finance',
	'human-resources',
	'production',
	'project-management',
	'supply-chain-management',
	'sales',
	'warehouse-management',
	'workflows'
] as const;

export const BASE_FEATURE_IDS = ['business-insights'] as const satisfies FeatureId[];

export type FeatureId = (typeof FEATURE_IDS)[number];

export type Feature = {
	id: FeatureId;
	label: string;
	description: string;
	navigation: NavigationItem[];
	Icon: Icon;
};

export const features = [
	{
		id: 'business-insights',
		label: 'Business Intelligence',
		description: 'Dashboards, analytics, KPIs and custom reports',
		Icon: ChartBarIcon,
		navigation: [
			{ label: 'Dashboard', href: '/bi', icon: ChartPieIcon },
			{ label: 'Reports', href: '/bi/reports', icon: FileSpreadsheetIcon }
		]
	},
	{
		id: 'customer-relationship-management',
		label: 'CRM',
		description: 'Contacts, leads, deals and customer history',
		Icon: ContactIcon,
		navigation: [
			{ label: 'Overview', href: '/crm', icon: ContactIcon },
			{ label: 'Contacts', href: '/crm/contacts', icon: UsersIcon },
			{ label: 'Leads', href: '/crm/leads', icon: UserSearchIcon },
			{ label: 'Deals', href: '/crm/deals', icon: HandshakeIcon }
		]
	},
	{
		id: 'document-management-system',
		label: 'Documents',
		description: 'Document management, file storage and full-text search',
		Icon: FileTextIcon,
		navigation: [
			{ label: 'Browse', href: '/dms', icon: FolderOpenIcon },
			{ label: 'Upload', href: '/dms/upload', icon: UploadIcon }
		]
	},
	{
		id: 'procurement',
		label: 'Procurement',
		description: 'Purchase orders, suppliers and product catalogs',
		Icon: ShoppingCartIcon,
		navigation: [
			{ label: 'Overview', href: '/procurement', icon: ShoppingCartIcon },
			{ label: 'Suppliers', href: '/procurement/suppliers', icon: TruckIcon },
			{ label: 'Purchase Orders', href: '/procurement/orders', icon: ClipboardListIcon },
			{ label: 'Catalogs', href: '/procurement/catalogs', icon: BookOpenIcon }
		]
	},
	{
		id: 'finance',
		label: 'Finance',
		description: 'Accounting, invoices, expenses, budgets and controlling',
		Icon: WalletIcon,
		navigation: [
			{ label: 'Dashboard', href: '/finance', icon: WalletIcon },
			{ label: 'Invoices', href: '/finance/invoices', icon: ReceiptIcon },
			{ label: 'Expenses', href: '/finance/expenses', icon: ReceiptTextIcon },
			{ label: 'Accounting', href: '/finance/accounting', icon: LandmarkIcon },
			{ label: 'Budgets', href: '/finance/budgets', icon: PiggyBankIcon },
			{ label: 'Reports', href: '/finance/reports', icon: FileSpreadsheetIcon }
		]
	},
	{
		id: 'human-resources',
		label: 'HR',
		description: 'Employees, time tracking, leave, payroll and recruiting',
		Icon: UserCogIcon,
		navigation: [
			{ label: 'Overview', href: '/hrm', icon: UserCogIcon },
			{ label: 'Employees', href: '/hrm/employees', icon: UsersIcon },
			{ label: 'Time Tracking', href: '/hrm/timetracking', icon: ClockIcon },
			{ label: 'Leave', href: '/hrm/leave', icon: CalendarOffIcon },
			{ label: 'Payroll', href: '/hrm/payroll', icon: BadgeDollarSignIcon },
			{ label: 'Recruiting', href: '/hrm/recruiting', icon: BriefcaseIcon }
		]
	},
	{
		id: 'production',
		label: 'Production',
		description: 'Manufacturing orders, bills of materials and planning',
		Icon: FactoryIcon,
		navigation: [
			{ label: 'Overview', href: '/production', icon: FactoryIcon },
			{ label: 'Orders', href: '/production/orders', icon: ClipboardListIcon },
			{ label: 'Bill of Materials', href: '/production/bom', icon: ListTreeIcon },
			{ label: 'Planning', href: '/production/planning', icon: CalendarRangeIcon }
		]
	},
	{
		id: 'project-management',
		label: 'Projects',
		description: 'Projects, tasks, timelines and team collaboration',
		Icon: FolderKanbanIcon,
		navigation: [
			{ label: 'All Projects', href: '/projects', icon: FolderKanbanIcon },
			{ label: 'Task Board', href: '/projects/board', icon: KanbanIcon },
			{ label: 'Timeline', href: '/projects/timeline', icon: GanttChartIcon },
			{ label: 'Files', href: '/projects/files', icon: FolderIcon }
		]
	},
	{
		id: 'supply-chain-management',
		label: 'Supply Chain',
		description: 'Shipments, supply chain partners and EDI integrations',
		Icon: NetworkIcon,
		navigation: [
			{ label: 'Overview', href: '/scm', icon: NetworkIcon },
			{ label: 'Shipments', href: '/scm/shipments', icon: PackageIcon },
			{ label: 'Partners', href: '/scm/partners', icon: HandshakeIcon },
			{ label: 'EDI', href: '/scm/edi', icon: LinkIcon }
		]
	},
	{
		id: 'sales',
		label: 'Sales',
		description: 'Quotes, orders, pipeline and revenue tracking',
		Icon: DollarSignIcon,
		navigation: [
			{ label: 'Dashboard', href: '/sales', icon: DollarSignIcon },
			{ label: 'Quotes', href: '/sales/quotes', icon: FileCheckIcon },
			{ label: 'Orders', href: '/sales/orders', icon: ShoppingBagIcon },
			{ label: 'Pipeline', href: '/sales/pipeline', icon: TargetIcon }
		]
	},
	{
		id: 'warehouse-management',
		label: 'Warehouse',
		description: 'Inventory, stock levels, warehouses and stock movements',
		Icon: WarehouseIcon,
		navigation: [
			{ label: 'Overview', href: '/wms', icon: WarehouseIcon },
			{ label: 'Inventory', href: '/wms/inventory', icon: PackageSearchIcon },
			{ label: 'Warehouses', href: '/wms/warehouses', icon: BuildingIcon },
			{ label: 'Movements', href: '/wms/movements', icon: ArrowLeftRightIcon }
		]
	},
	{
		id: 'workflows',
		label: 'Workflows',
		description: 'Automation, approval flows and workflow templates',
		Icon: WorkflowIcon,
		navigation: [
			{ label: 'All Workflows', href: '/workflows', icon: WorkflowIcon },
			{ label: 'Templates', href: '/workflows/templates', icon: PlayIcon },
			{ label: 'Approvals', href: '/workflows/approvals', icon: CheckCircleIcon }
		]
	}
] satisfies Feature[];

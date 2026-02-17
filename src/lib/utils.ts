import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { IconProps } from '@lucide/svelte';
import type { Component } from 'svelte';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export type Icon = Component<IconProps>;
export type WithIcon<T> = T & { Icon: Icon };

export type NavigationItem = {
	label: string;
	href: string;
	icon?: Icon;
};

export type NavigationGroup = NavigationItem & {
	items: NavigationItem[];
};

<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { cn, type NavigationItem } from '$lib/utils';

	const navigationLinks: NavigationItem[] = [
		{ label: 'Features', href: '/features' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];

	import logo from '$lib/assets/logo-alrein.svg';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';

	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { ButtonGroup } from '$lib/components/ui/button-group';
	import DarkModeToggle from './header-dark-mode-toggle.svelte';
	const isMobile = new IsMobile();

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Alert Dialog',
			href: '/docs/components/alert-dialog',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.'
		},
		{
			title: 'Hover Card',
			href: '/docs/components/hover-card',
			description: 'For sighted users to preview content available behind a link.'
		},
		{
			title: 'Progress',
			href: '/docs/components/progress',
			description:
				'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
		},
		{
			title: 'Scroll-area',
			href: '/docs/components/scroll-area',
			description: 'Visually or semantically separates content.'
		},
		{
			title: 'Tabs',
			href: '/docs/components/tabs',
			description:
				'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
		},
		{
			title: 'Tooltip',
			href: '/docs/components/tooltip',
			description:
				'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

<header
	class="sticky bottom-0 z-20 border-t bg-background/95 backdrop-blur-sm md:top-0 md:border-t-0 md:border-b"
>
	<div class="container mx-auto px-4 py-2">
		<div class="grid grid-cols-3 items-center">
			<div class="flex items-center justify-start">
				<a href="/" class="text-2xl font-bold">
					<img src={logo} alt="alrein" class="h-16 py-2 invert dark:invert-0" />
				</a>
			</div>

			<NavigationMenu.Root viewport={isMobile.current} class="justify-self-center">
				<NavigationMenu.List class="flex-wrap">
					<NavigationMenu.Item>
						<NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
						<NavigationMenu.Content>
							<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li class="row-span-3">
									<NavigationMenu.Link
										class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-hidden select-none focus:shadow-md md:p-6"
									>
										{#snippet child({ props })}
											<a {...props} href="/">
												<div class="mt-4 mb-2 text-lg font-medium">shadcn-svelte</div>
												<p class="text-sm leading-tight text-muted-foreground">
													Beautifully designed components built with Tailwind CSS.
												</p>
											</a>
										{/snippet}
									</NavigationMenu.Link>
								</li>
								{@render ListItem({
									href: '/docs',
									title: 'Introduction',
									content: 'Re-usable components built using Bits UI and Tailwind CSS.'
								})}
								{@render ListItem({
									href: '/docs/installation',
									title: 'Installation',
									content: 'How to install dependencies and structure your app.'
								})}
								{@render ListItem({
									href: '/docs/components/typography',
									title: 'Typography',
									content: 'Styles for headings, paragraphs, lists...etc'
								})}
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>

			<div class="flex gap-4 justify-self-end">
				<ButtonGroup aria-label="Get started">
					<Button variant="outline">Login</Button>
					<Button variant="outline">Sign Up</Button>
				</ButtonGroup>

				<Separator orientation="vertical"></Separator>

				<DarkModeToggle />
			</div>
		</div>
	</div>
</header>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					{href}
					class={cn(
						'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import type { NavigationItem } from '$lib/utils';

	import { Button } from '$lib/components/ui/button';
	import { Marquee } from '$lib/components/ui/marquee';

	import mail from '$lib/assets/mail2.png';
	import mailLight from '$lib/assets/mail2-light.png';

	const navigationLinks: NavigationItem[] = [
		{ label: 'Features', href: '/features' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<main class="overflow-hidden">
	<div class="pointer-events-none absolute inset-0 hidden opacity-65 contain-strict lg:block">
		<div
			class="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
		></div>
		<div
			class="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
		></div>
		<div
			class="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
		></div>
	</div>
	<section>
		<div class="relative pt-24 md:pt-36">
			<div
				class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
			></div>
			<div class="mx-auto max-w-7xl px-6">
				<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
					<div>
						<a
							href="#link"
							class="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
						>
							<span class="text-sm text-foreground">Introducing Support for AI Models</span>
							<span
								class="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700"
							></span>
							<div
								class="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted"
							>
								<div
									class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
								>
									<span class="flex size-6">
										<ArrowRight class="m-auto size-3" />
									</span>
									<span class="flex size-6">
										<ArrowRight class="m-auto size-3" />
									</span>
								</div>
							</div>
						</a>
					</div>
					<h1 class="mt-8 text-6xl text-balance md:text-7xl lg:mt-16 xl:text-[5.25rem]">
						Modern Solutions for Customer Engagement
					</h1>
					<p class="mx-auto mt-8 max-w-2xl text-lg text-balance">
						Highly customizable components for building modern websites and applications that look
						and feel the way you mean it.
					</p>
					<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
						<div
							class="border bg-foreground/10 p-0.5"
							style="border-radius: calc(0.5rem + 0.125rem + 4px);"
						>
							<Button href="#link" size="lg" class="rounded-xl px-5 text-base">
								<span class="text-nowrap">Start Building</span>
							</Button>
						</div>
						<Button size="lg" variant="ghost" class="rounded-xl px-5">Request a demo</Button>
					</div>
				</div>
			</div>
			<div class="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
				<div
					class="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-background"
				></div>
				<div
					class="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background shadow-lg inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20"
				>
					<img
						class="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
						src={mail}
						alt="app screen"
						width="2700"
						height="1440"
					/>
					<img
						class="relative z-2 aspect-15/8 rounded-2xl border border-border/25 dark:hidden"
						src={mailLight}
						alt="app screen"
						width="2700"
						height="1440"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="container mx-auto overflow-hidden bg-background px-4 py-16">
		<div class="group relative">
			<div class="flex flex-col items-center md:flex-row">
				<div class="md:max-w-44 md:border-r md:pr-6">
					<p class="text-end text-sm text-balance">Powered by cutting edge tech</p>
				</div>
				<div class="relative py-6 md:w-[calc(100%-11rem)]">
					<Marquee>
						<div class="flex">
							<img
								class="mx-auto h-5 w-fit dark:invert"
								src="https://cdn.simpleicons.org/nvidia"
								alt="Nvidia Logo"
								height="20"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-4 w-fit dark:invert"
								src="https://cdn.simpleicons.org/stripe"
								alt="Stripe Logo"
								height="16"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-4 w-fit dark:invert"
								src="https://cdn.simpleicons.org/github"
								alt="GitHub Logo"
								height="16"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-5 w-fit dark:invert"
								src="https://cdn.simpleicons.org/nike"
								alt="Nike Logo"
								height="20"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-5 w-fit dark:invert"
								src="https://cdn.simpleicons.org/lemonsqueezy"
								alt="Lemon Squeezy Logo"
								height="20"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-4 w-fit dark:invert"
								src="https://cdn.simpleicons.org/laravel"
								alt="Laravel Logo"
								height="16"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-5 w-fit dark:invert"
								src="https://cdn.simpleicons.org/vercel"
								alt="Vercel Logo"
								height="20"
								width="auto"
							/>
						</div>
						<div class="flex">
							<img
								class="mx-auto h-6 w-fit dark:invert"
								src="https://cdn.simpleicons.org/anthropic"
								alt="Anthropic Logo"
								height="24"
								width="auto"
							/>
						</div>
					</Marquee>
				</div>
			</div>
		</div>
	</section>
</main>

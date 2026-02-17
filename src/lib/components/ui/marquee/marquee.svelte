<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	import ProgressiveBlur from './marquee-blur.svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		pauseOnHover = false,
		repeat = 4,
		reverse = false,
		...restProps
	}: MarqueeProps = $props();

	type MarqueeProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		pauseOnHover?: boolean;
		repeat?: number;
		reverse?: boolean;
	};
</script>

<div
	bind:this={ref}
	class={cn(
		'group relative isolate flex flex-row gap-(--gap) overflow-hidden p-2 [--duration:16s] [--gap:3rem]',
		className
	)}
	{...restProps}
>
	<div class="absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background"></div>
	<div class="absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background"></div>

	<ProgressiveBlur
		direction="left"
		blurIntensity={1}
		class="pointer-events-none absolute top-0 left-0 z-10 h-full w-20"
	/>
	<ProgressiveBlur
		direction="right"
		blurIntensity={1}
		class="pointer-events-none absolute top-0 right-0 z-10 h-full w-20"
	/>

	{#each { length: repeat } as _, i (i)}
		<div
			class={cn('animate-marquee flex shrink-0 flex-row justify-around gap-(--gap)', {
				'group-hover:paused': pauseOnHover,
				'direction-[reverse]': reverse
			})}
		>
			{@render children?.()}
		</div>
	{/each}
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.animate-marquee {
		animation: marquee var(--duration) linear infinite;
	}
</style>

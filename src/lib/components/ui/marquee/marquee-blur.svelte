<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		direction = 'bottom',
		blurLayers = 8,
		blurIntensity = 0.25,
		...restProps
	}: ProgressiveBlurProps = $props();

	type ProgressiveBlurProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		direction?: keyof typeof GRADIENT_ANGLES;
		blurLayers?: number;
		blurIntensity?: number;
	};

	const GRADIENT_ANGLES = {
		top: 0,
		right: 90,
		bottom: 180,
		left: 270
	};

	let layers = $derived.by(() => {
		const layerCount = Math.max(blurLayers, 2);
		const segmentSize = 1 / (blurLayers + 1);

		return new Array({ length: layerCount }).map((_, index) => {
			const angle = GRADIENT_ANGLES[direction];
			const gradientStops = [
				index * segmentSize,
				(index + 1) * segmentSize,
				(index + 2) * segmentSize,
				(index + 3) * segmentSize
			].map(
				(pos, posIndex) =>
					`rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`
			);

			const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`;
			const style = `mask-image: ${gradient};-webkit-mask-image: ${gradient};backdrop-filter: blur(${index * blurIntensity}px); z-index: ${index * 10};`;

			return { style };
		});
	});
</script>

<div bind:this={ref} class="relative" {...restProps}>
	{#each layers as { style }, i (i)}
		<div
			class={cn('pointer-events-none absolute inset-0 rounded-[inherit]', className)}
			{style}
		></div>
	{/each}
</div>

<script lang="ts">
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';

	const isMobile = new IsMobile();

	let { children } = $props();

	async function loadScene() {
		try {
			const module = await import('$lib/components/webgl/prism');
			return module.Prism;
		} catch (error) {
			console.error(error);
			throw new Error('Failed to load scene');
		}
	}
</script>

<div class="relative h-screen w-full overflow-hidden">
	{#if !isMobile.current}
		{#await loadScene() then Prism}
			<div
				class="dark absolute inset-0 -z-10 grid animate-in place-items-center overflow-hidden bg-background fade-in"
			>
				<Prism
					animationType="rotate"
					timeScale={0.5}
					height={3.5}
					baseWidth={5.5}
					scale={3.6}
					hueShift={0}
					colorFrequency={1}
					noise={0}
					glow={1}
				/>
			</div>
		{/await}
	{/if}

	<div
		class="ml-auto h-full max-h-screen w-full overflow-y-scroll bg-background/80 px-4 py-6 backdrop-blur-sm md:w-1/2 md:border-l dark:border-border/90 dark:bg-background/90"
	>
		{@render children()}
	</div>
</div>

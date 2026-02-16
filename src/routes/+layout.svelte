<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';

	import './layout.css';
	import '@fontsource-variable/geist';
	import '@fontsource-variable/geist-mono';

	import favicon from '$lib/assets/favicon.svg';

	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>

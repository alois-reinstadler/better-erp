<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from './(components)/app-sidebar';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<main class="flex grow flex-col">
		<Sidebar.Trigger />
		{@render children?.()}
	</main>
</Sidebar.Provider>

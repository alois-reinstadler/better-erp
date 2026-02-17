<script lang="ts">
	import { cn } from '$lib/utils';

	let calendarView = $state<'day' | 'week' | 'month'>('month');

	const GRID_LAYOUTS = {
		day: {
			rows: 48,
			cols: 1
		},
		week: {
			rows: 48,
			cols: 7
		},
		month: {
			rows: 4,
			cols: 7
		}
	} as const;

	const gridLayout = $derived(GRID_LAYOUTS[calendarView]);
</script>

<div class="relative isolate grow">
	<div class="flex h-full w-full flex-col">
		{#each Array.from({ length: gridLayout.rows }) as _, rowIdx (rowIdx)}
			<div class="flex grow flex-row">
				{#each Array.from({ length: gridLayout.cols }) as _, colIdx (colIdx)}
					<div class="flex grow border">{rowIdx * gridLayout.cols + colIdx}</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

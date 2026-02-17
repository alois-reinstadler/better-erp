<script lang="ts">
	import { Map, MapControls } from '$lib/components/ui/map';
</script>

<div class="relative isolate grow">
	<div class="absolute top-0 right-0 z-10 h-screen w-screen">
		<Map center={[-74.006, 40.7128]} zoom={11}>
			<MapControls />
		</Map>
	</div>
</div>

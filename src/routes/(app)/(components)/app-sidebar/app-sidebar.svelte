<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { user, navigation } from './data';

	import logo from '$lib/assets/logo-alrein.svg';
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<a href="/" class="grid place-items-center">
			<img src={logo} alt="alrein" class="h-16 py-2 invert dark:invert-0" />
		</a>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>{navigation.overview.label}</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each navigation.overview.items as { href, label, Icon } (label)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a {href} {...props}>
										<Icon />
										<span>{label}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>

		<Sidebar.Group>
			<Sidebar.GroupLabel>{navigation.features.label}</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each navigation.features.items as { href, label, Icon } (label)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a {href} {...props}>
										<Icon />
										<span>{label}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer />
</Sidebar.Root>

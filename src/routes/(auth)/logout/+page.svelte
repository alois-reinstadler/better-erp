<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageServerData } from './$types';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	import logo from '$lib/assets/logo-alrein.svg';
	import { getLocale } from '$lib/paraglide/runtime';

	let { form, data }: { form: ActionData; data: PageServerData } = $props();
</script>

<section class="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-evenly">
	<header class="grid place-items-center">
		<a href="/" aria-label="go home">
			<img src={logo} alt="alrein" class="h-16 invert dark:invert-0" />
		</a>
	</header>

	<form class="flex w-full flex-col gap-6" method="post" action="?/signOut" use:enhance>
		<div class="flex flex-col gap-1">
			<h1 class="text-xl font-semibold">Logout of Hubris</h1>
			<p class="text-muted-foreground">Are you sure you want to logout?</p>
		</div>

		<div class="flex flex-col gap-2">
			<Button class="w-full" variant="outline" formaction="?/signOut">Logout</Button>
			<Button class="w-full" href="/dashboard">Back to Dashboard</Button>
		</div>

		<div class="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
			<hr class="border-dashed" />
			<span class="text-xs text-muted-foreground">Currently logged in as</span>
			<hr class="border-dashed" />
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-sm text-muted-foreground">Name</span>
				<p>{data.user.name}</p>
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-sm text-muted-foreground">Email</span>
				<p>{data.user.email}</p>
			</div>

			<div class="flex flex-col gap-1">
				<span class="text-sm text-muted-foreground">Registered on</span>
				<p>
					{data.user.createdAt.toLocaleDateString(getLocale(), {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
			</div>
		</div>
	</form>
</section>

<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	import logo from '$lib/assets/logo-alrein.svg';

	let { form }: { form: ActionData } = $props();
</script>

<section class="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-evenly">
	<header class="grid place-items-center">
		<a href="/" aria-label="go home">
			<img src={logo} alt="alrein" class="h-16 invert dark:invert-0" />
		</a>
	</header>

	<form class="flex w-full flex-col gap-6" method="post" action="?/signUpEmail" use:enhance>
		<div class="flex flex-col gap-1">
			<h1 class="text-xl font-semibold">Register for an account</h1>
			<p class="text-muted-foreground">
				Welcome! Please enter your credentials to create an account.
			</p>
		</div>

		<Button type="button" variant="outline" class="w-full">
			<svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262">
				<path
					fill="#4285f4"
					d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
				></path>
				<path
					fill="#34a853"
					d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
				></path>
				<path
					fill="#fbbc05"
					d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
				></path>
				<path
					fill="#eb4335"
					d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
				></path>
			</svg>
			<span>Google</span>
		</Button>

		<div class="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
			<hr class="border-dashed" />
			<span class="text-xs text-muted-foreground">Or continue With</span>
			<hr class="border-dashed" />
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<Label for="name" class="block text-sm">Name</Label>
				<Input type="text" required name="name" id="name" />
			</div>
			<div class="flex flex-col gap-1">
				<Label for="email" class="block text-sm">Email</Label>
				<Input type="email" required name="email" id="email" />
			</div>

			<div class="flex flex-col gap-1">
				<Label for="password" class="block text-sm">Password</Label>
				<Input type="password" required name="password" id="password" />
			</div>

			<Button class="w-full" formaction="?/signUpEmail">Continue</Button>
		</div>

		<div class="flex items-center justify-between text-sm">
			<p class="text-muted-foreground">Already have an account?</p>
			<Button variant="link" class="px-2 text-muted-foreground hover:text-foreground" href="/login"
				>Login</Button
			>
		</div>
	</form>

	<footer>
		<p class="text-xs text-muted-foreground">
			By registering, you agree to our <a href="/terms" class="underline hover:text-foreground"
				>Terms of Service</a
			>
			and
			<a href="/privacy" class="underline hover:text-foreground">Privacy Policy</a>.
		</p>
	</footer>
</section>

<div class="my-16 px-4 text-center sm:px-6">
	<h2 class="mb-3 text-3xl font-bold text-foreground">
		<span class="block"> Check out the original Origin UI library </span>
		<span class="mt-1 block text-lg font-medium text-muted-foreground"> or send a suggestion </span>
	</h2>
	<p class="mb-6 text-balance text-muted-foreground">
		Suggest a component or improvements you'd like to see & check out the original Origin UI!
	</p>
	<div class="flex flex-wrap items-center justify-center gap-4">
		<a
			class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/[.04] transition-shadow hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input disabled:pointer-events-none disabled:opacity-50"
			href="https://github.com/max-got/originui-svelte/discussions"
			target="_blank"
			aria-label="Send a suggestion to the Origin UI - Svelte repository"
		>
			<span class="text-secondary-foreground">Send Suggestion</span>
		</a>
		<a
			class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/[.04] transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			href="https://originui.com/"
			target="_blank"
			aria-label="Visit the original Origin UI website"
		>
			<span class="text-primary-foreground">Check out the original</span>
		</a>
	</div>
</div>

<div class="mb-12 flex items-center justify-center gap-2 text-sm">
	<span class="text-muted-foreground">Brought to you by</span>
	<span class="-ml-0.5 flex -space-x-2">
		<a
			class="group relative h-7 w-7 overflow-hidden rounded-full border-2 border-background"
			href="https://x.com/max_gotts"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Max's profile image"
		>
			<enhanced:img
				class="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
				src="/static/avatar.jpg"
				alt="Max's profile image"
				loading="lazy"
			/>
		</a>
	</span>
</div>

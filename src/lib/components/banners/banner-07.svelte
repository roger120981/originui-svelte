<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';

	import Eclipse from '@lucide/svelte/icons/eclipse';
	import X from '@lucide/svelte/icons/x';

	let visible = $state(true);
</script>

{#if visible}
	<div class="dark bg-muted text-foreground px-4 py-3 md:py-2">
		<div class="flex gap-2 md:items-center">
			<div class="flex grow gap-3 md:items-center">
				<Eclipse class="shrink-0 opacity-60 max-md:mt-0.5" size={16} aria-hidden="true" />
				<div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
					<p class="text-sm">
						It&lsquo;s live and ready to use! Start exploring the latest addition to your toolkit.
					</p>
					<div class="flex gap-2 max-md:flex-wrap">
						<Button size="sm" class="text-sm">Download</Button>
						<Button variant="link" size="sm" class="text-sm">Learn more</Button>
					</div>
				</div>
			</div>
			<Button
				variant="ghost"
				class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
				onclick={() => (visible = false)}
				aria-label="Close banner"
			>
				<X
					size={16}
					class="opacity-60 transition-opacity group-hover:opacity-100"
					aria-hidden="true"
				/>
			</Button>
		</div>
	</div>
{/if}

<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';

	import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import X from '@lucide/svelte/icons/x';
</script>

<!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
<div
	class="z-[100] max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5"
>
	<div class="flex gap-3">
		<div
			class="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
			aria-hidden="true"
		>
			<RefreshCw class="opacity-60" size={16} strokeWidth={2} />
		</div>
		<div class="flex grow flex-col gap-3">
			<div class="space-y-1">
				<p class="text-sm font-medium">Version 1.4 is now available!</p>
				<p class="text-sm text-muted-foreground">
					This update contains several bug fixes and performance improvements.
				</p>
			</div>
			<div class="flex gap-2">
				<Button size="sm">Install</Button>
				<Button size="sm" variant="link">Later</Button>
			</div>
		</div>
		<Button
			variant="ghost"
			class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
			aria-label="Close notification"
		>
			<X
				size={16}
				strokeWidth={2}
				class="opacity-60 transition-opacity group-hover:opacity-100"
				aria-hidden="true"
			/>
		</Button>
	</div>
</div>

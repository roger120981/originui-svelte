<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';

	import Printer from '@lucide/svelte/icons/printer';
</script>

<Button variant="outline">
	<Printer class="-ms-1 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
	Print
	<kbd
		class="-me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
	>
		⌘P
	</kbd>
</Button>

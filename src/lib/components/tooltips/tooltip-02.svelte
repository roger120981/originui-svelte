<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';

	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from '$lib/components/ui/tooltip';
</script>

<TooltipProvider delayDuration={0}>
	<Tooltip>
		<TooltipTrigger>
			{#snippet child({ props })}
				<Button variant="outline" size="sm" {...props}>Dark</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent class="dark px-2 py-1 text-xs">This tooltip will be always dark</TooltipContent>
	</Tooltip>
</TooltipProvider>

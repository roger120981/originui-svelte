<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLOlAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: WithElementRef<HTMLOlAttributes> = $props();
</script>

<ol
	bind:this={ref}
	class={cn(
		'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ol>

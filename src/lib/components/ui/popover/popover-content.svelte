<script lang="ts">
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils.js';

	import { Popover as PopoverPrimitive, type WithoutChildren } from 'bits-ui';

	let {
		align = 'center',
		children,
		class: className,
		portalProps,
		ref = $bindable(null),
		showArrow = false,
		sideOffset = 4,
		...restProps
	}: WithoutChildren<PopoverPrimitive.ContentProps> & {
		children: Snippet;
		portalProps?: PopoverPrimitive.PortalProps;
		showArrow?: boolean;
	} = $props();
</script>

<PopoverPrimitive.Portal {...portalProps}>
	<PopoverPrimitive.Content
		bind:ref
		{sideOffset}
		{align}
		class={cn(
			'z-50 max-h-[var(--bits-popover-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg shadow-black/5 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			className
		)}
		{...restProps}
	>
		{#if showArrow}
			<PopoverPrimitive.Arrow
				class="-my-px text-popover drop-shadow-[0_1px_0_hsl(var(--border))]"
			/>
		{/if}
		{@render children()}
	</PopoverPrimitive.Content>
</PopoverPrimitive.Portal>

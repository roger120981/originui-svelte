<script lang="ts">
	import Box from '@lucide/svelte/icons/box';
	import House from '@lucide/svelte/icons/house';
	import PanelsTopLeft from '@lucide/svelte/icons/panels-top-left';
	import { ScrollArea, Scrollbar } from '$lib/components/ui/scroll-area';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
</script>

<Tabs value="tab-1" class="items-center">
	<ScrollArea>
		<TabsList
			class="relative mb-3 h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border"
		>
			<TabsTrigger
				value="tab-1"
				class="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
			>
				<House class="-ms-0.5 me-1.5 opacity-60" size={16} stroke-width={2} aria-hidden="true" />
				Overview
			</TabsTrigger>
			<TabsTrigger
				value="tab-2"
				class="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
			>
				<PanelsTopLeft
					class="-ms-0.5 me-1.5 opacity-60"
					size={16}
					stroke-width={2}
					aria-hidden="true"
				/>
				Repositories
			</TabsTrigger>
			<TabsTrigger
				value="tab-3"
				class="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
			>
				<Box class="-ms-0.5 me-1.5 opacity-60" size={16} stroke-width={2} aria-hidden="true" />
				Packages
			</TabsTrigger>
		</TabsList>
		<Scrollbar orientation="horizontal" />
	</ScrollArea>
	<TabsContent value="tab-1">
		<p class="p-4 pt-1 text-center text-xs text-muted-foreground">Content for Tab 1</p>
	</TabsContent>
	<TabsContent value="tab-2">
		<p class="p-4 pt-1 text-center text-xs text-muted-foreground">Content for Tab 2</p>
	</TabsContent>
	<TabsContent value="tab-3">
		<p class="p-4 pt-1 text-center text-xs text-muted-foreground">Content for Tab 3</p>
	</TabsContent>
</Tabs>

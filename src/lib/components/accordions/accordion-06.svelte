<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	import AtSign from '@lucide/svelte/icons/at-sign';
	import Command from '@lucide/svelte/icons/command';
	import Eclipse from '@lucide/svelte/icons/eclipse';
	import Plus from '@lucide/svelte/icons/plus';
	import Zap from '@lucide/svelte/icons/zap';
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	const items = [
		{
			content:
				'Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.',
			icon: Command,
			id: '1',
			title: 'What makes Origin UI - Svelte different?'
		},
		{
			content:
				'Use our CSS variables for global styling, or class and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.',
			icon: Eclipse,
			id: '2',
			title: 'How can I customize the components?'
		},
		{
			content:
				'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.',
			icon: Zap,
			id: '3',
			title: 'Is Origin UI - Svelte optimized for performance?'
		},
		{
			content:
				'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.',
			icon: AtSign,
			id: '4',
			title: 'How accessible are the components?'
		}
	];
</script>

<div class="space-y-4">
	<h2 class="text-xl font-bold">W/ icon and plus-minus</h2>
	<Accordion.Root type="single" class="w-full" value="3">
		{#each items as item (item.id)}
			<Accordion.Item value={item.id} class="py-2">
				<AccordionPrimitive.Header class="flex">
					<AccordionPrimitive.Trigger
						class="flex flex-1 items-center justify-between py-2 text-left text-[15px] leading-6 font-semibold transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0"
					>
						<span class="flex items-center gap-3">
							<item.icon size={16} class="shrink-0 opacity-60" aria-hidden="true" />
							<span>{item.title}</span>
						</span>
						<Plus
							size={16}
							class="shrink-0 opacity-60 transition-transform duration-200"
							aria-hidden="true"
						/>
					</AccordionPrimitive.Trigger>
				</AccordionPrimitive.Header>
				<Accordion.Content class="text-muted-foreground ps-7 pb-2">
					{item.content}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>

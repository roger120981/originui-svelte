<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import * as Select from '$lib/components/ui/select/index.js';

	const items = [
		{ label: 'Svelte', value: 's1' },
		{ label: 'Next.js', value: 's2' },
		{ label: 'Astro', value: 's3' },
		{ label: 'Gatsby', value: 's4' }
	];

	let value = $state('s1');

	const selected = $derived(items.find((i) => i.value === value));

	const uid = $props.id();
</script>

<div class="space-y-2">
	<Label for={uid}>Select with right indicator</Label>
	<Select.Root type="single" bind:value>
		<Select.Trigger id={uid}>
			{selected?.label ?? 'Select a framework'}
		</Select.Trigger>
		<Select.Content
			class="[&_*[data-select-item]]:ps-2 [&_*[data-select-item]]:pe-8 [&_*[data-select-item]>span]:start-auto [&_*[data-select-item]>span]:end-2"
		>
			{#each items as item (item.value)}
				<Select.Item value={item.value}>
					{item.label}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>

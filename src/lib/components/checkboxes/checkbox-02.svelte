<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';
	import Label from '$lib/components/ui/label.svelte';

	let checked = $state(false);
</script>

<div class="flex items-center gap-2">
	<Checkbox id="checkbox-02" bind:checked indeterminate />
	<Label for="checkbox-02">Indeterminate checkbox</Label>
</div>

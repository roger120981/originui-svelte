<script lang="ts">
	import Label from '$lib/components/ui/label.svelte';
	import Switch from '$lib/components/ui/switch.svelte';
</script>

<div class="inline-flex items-center gap-2">
	<Switch id="switch-05" class="rounded-md [&_span]:rounded" />
	<Label for="switch-05" class="sr-only">Square switch</Label>
</div>

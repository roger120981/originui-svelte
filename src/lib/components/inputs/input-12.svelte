<script lang="ts">
	import Input from '$lib/components/ui/input.svelte';
	import Label from '$lib/components/ui/label.svelte';
</script>

<div class="space-y-2">
	<Label for="input-12">Input with end inline add-on</Label>
	<div class="relative">
		<Input id="input-12" class="peer pe-12" placeholder="google" type="text" />
		<span
			class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50"
		>
			.com
		</span>
	</div>
</div>

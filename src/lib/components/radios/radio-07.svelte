<script lang="ts">
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';

	let selectedColor = $state('blue');
</script>

<fieldset class="space-y-4">
	<legend class="text-foreground text-sm leading-none font-medium">Choose a color</legend>
	<RadioGroup class="flex gap-1.5" bind:value={selectedColor}>
		<RadioGroupItem
			value="blue"
			id="radio-07-blue"
			aria-label="Blue"
			class="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
		/>
		<RadioGroupItem
			value="indigo"
			id="radio-07-indigo"
			aria-label="Indigo"
			class="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
		/>
		<RadioGroupItem
			value="pink"
			id="radio-07-pink"
			aria-label="Pink"
			class="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
		/>
		<RadioGroupItem
			value="red"
			id="radio-07-red"
			aria-label="Red"
			class="size-6 border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
		/>
		<RadioGroupItem
			value="orange"
			id="radio-07-orange"
			aria-label="Orange"
			class="size-6 border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
		/>
		<RadioGroupItem
			value="yellow"
			id="radio-07-yellow"
			aria-label="Yellow"
			class="size-6 border-yellow-500 bg-yellow-500 shadow-none data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500"
		/>
		<RadioGroupItem
			value="green"
			id="radio-07-green"
			aria-label="Green"
			class="size-6 border-green-500 bg-green-500 shadow-none data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500"
		/>
	</RadioGroup>
</fieldset>

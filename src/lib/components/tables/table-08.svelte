<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox.svelte';

	import {
		Table,
		TableBody,
		TableCell,
		TableFooter,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

	const items = [
		{
			balance: '$1,250.00',
			email: 'alex.t@company.com',
			id: '1',
			location: 'San Francisco, US',
			name: 'Alex Thompson',
			status: 'Active'
		},
		{
			balance: '$600.00',
			email: 'sarah.c@company.com',
			id: '2',
			location: 'Singapore',
			name: 'Sarah Chen',
			status: 'Active'
		},
		{
			balance: '$650.00',
			email: 'j.wilson@company.com',
			id: '3',
			location: 'London, UK',
			name: 'James Wilson',
			status: 'Inactive'
		},
		{
			balance: '$0.00',
			email: 'm.garcia@company.com',
			id: '4',
			location: 'Madrid, Spain',
			name: 'Maria Garcia',
			status: 'Active'
		},
		{
			balance: '-$1,000.00',
			email: 'd.kim@company.com',
			id: '5',
			location: 'Seoul, KR',
			name: 'David Kim',
			status: 'Active'
		}
	];

	const id = $props.id();
</script>

<div>
	<div class="bg-background overflow-hidden rounded-md border">
		<Table>
			<TableHeader>
				<TableRow class="hover:bg-transparent">
					<TableHead class="h-11">
						<Checkbox {id} />
					</TableHead>
					<TableHead class="h-11">Name</TableHead>
					<TableHead class="h-11">Email</TableHead>
					<TableHead class="h-11">Location</TableHead>
					<TableHead class="h-11">Status</TableHead>
					<TableHead class="h-11 text-right">Balance</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each items as item (item.id)}
					<TableRow>
						<TableCell>
							<Checkbox id="table-checkbox-{item.id}" />
						</TableCell>
						<TableCell class="font-medium">{item.name}</TableCell>
						<TableCell>{item.email}</TableCell>
						<TableCell>{item.location}</TableCell>
						<TableCell>{item.status}</TableCell>
						<TableCell class="text-right">{item.balance}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
			<TableFooter class="bg-transparent">
				<TableRow class="hover:bg-transparent">
					<TableCell colspan={5}>Total</TableCell>
					<TableCell class="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	</div>
	<p class="text-muted-foreground mt-4 text-center text-sm">Card Table</p>
</div>

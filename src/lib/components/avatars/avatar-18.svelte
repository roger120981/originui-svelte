<script lang="ts">
	import AvatarImg01 from '$assets/avatar-80-03.jpg?w=128&h=128&enhanced';
	import AvatarImg02 from '$assets/avatar-80-05.jpg?w=128&h=128&enhanced';
	import AvatarImg03 from '$assets/avatar-80-06.jpg?w=128&h=128&enhanced';
	import AvatarImg04 from '$assets/avatar-80-07.jpg?w=128&h=128&enhanced';
</script>

<div class="flex -space-x-[1.2rem]">
	<enhanced:img
		class="ring-background size-16 rounded-full ring-2"
		src={AvatarImg01}
		alt="Avatar 01"
		loading="lazy"
		decoding="async"
	/>
	<enhanced:img
		class="ring-background size-16 rounded-full ring-2"
		src={AvatarImg02}
		alt="Avatar 02"
		loading="lazy"
		decoding="async"
	/>
	<enhanced:img
		class="ring-background size-16 rounded-full ring-2"
		src={AvatarImg03}
		alt="Avatar 03"
		loading="lazy"
		decoding="async"
	/>
	<enhanced:img
		class="ring-background size-16 rounded-full ring-2"
		src={AvatarImg04}
		alt="Avatar 04"
		loading="lazy"
		decoding="async"
	/>
</div>

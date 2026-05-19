<script lang="ts">
	import { onMount } from 'svelte';

	const navLinkClass =
		'text-sm font-bold text-white/40 transition-colors hover:text-yellow-500';

	let isVisible = $state(true);
	let lastScroll = $state(0);

	onMount(() => {
		const handleScroll = () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll > lastScroll && currentScroll > 100) {
				isVisible = false;
			} else {
				isVisible = true;
			}
			lastScroll = currentScroll;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	id="navbar"
	class="fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6 px-8"
	style:transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
    style:background={isVisible && lastScroll > 50 ? 'rgba(0,0,0,0.8)' : 'transparent'}
    style:backdrop-filter={isVisible && lastScroll > 50 ? 'blur(10px)' : 'none'}
>
	<div class="max-w-7xl mx-auto flex justify-between items-center">
		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center space-x-10">
			<a href="#home" class={navLinkClass}>Home</a>
			<a href="#about" class={navLinkClass}>About</a>
			<a href="#skills" class={navLinkClass}>Skills</a>
			<a href="#projects" class={navLinkClass}>Projects</a>
			<a
				href="https://linkedin.com/in/taufeeq-ali"
				target="_blank"
				class="bg-white text-black text-[10px] font-bold px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-all"
				>Connect</a
			>
		</div>
	</div>
</nav>

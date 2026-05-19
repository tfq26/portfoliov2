<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let isVisible = $state(true);
	let lastScroll = 0;

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

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
		<a href="#home" class="group flex items-center gap-2">
			<span class="text-xl font-bold tracking-tighter text-white">Taufeeq <span class="text-white/40">Ali</span></span>
		</a>

		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center space-x-10">
			<a href="#home" class="nav-link">Home</a>
			<a href="#about" class="nav-link">About</a>
			<a href="#skills" class="nav-link">Skills</a>
			<a href="#projects" class="nav-link">Projects</a>
			<a
				href="https://linkedin.com/in/taufeeq-ali"
				target="_blank"
				class="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-zinc-200 transition-all"
				>Connect</a
			>
		</div>

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMenu}
			class="md:hidden text-white/60 hover:text-white"
			aria-label="Toggle Mobile Menu"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M4 8h16M4 16h16"
				></path></svg
			>
		</button>
	</div>

	<!-- Mobile Menu -->
	<div
		class="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-12 transition-transform duration-700 md:hidden"
		class:translate-y-full={!isMenuOpen}
		class:translate-y-0={isMenuOpen}
	>
		<button onclick={toggleMenu} class="absolute top-8 right-8 text-white/40" aria-label="Close Menu">
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M6 18L18 6M6 6l12 12"
				></path></svg
			>
		</button>
		<a href="#home" onclick={toggleMenu} class="text-4xl font-bold tracking-tighter">Home</a>
		<a href="#about" onclick={toggleMenu} class="text-4xl font-bold tracking-tighter">About</a>
		<a href="#skills" onclick={toggleMenu} class="text-4xl font-bold tracking-tighter">Skills</a>
		<a href="#projects" onclick={toggleMenu} class="text-4xl font-bold tracking-tighter">Projects</a>
	</div>
</nav>

<style>
	@reference "tailwindcss";
	.nav-link {
		@apply text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors;
	}
</style>

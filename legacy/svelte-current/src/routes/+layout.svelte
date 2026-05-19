<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active');
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
	});
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(.reveal) {
		opacity: 0;
		transform: translateY(30px);
		transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
	}

	:global(.reveal.active) {
		opacity: 1;
		transform: translateY(0);
	}
</style>

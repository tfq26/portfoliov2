<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<section
	id="home"
	class="relative flex min-h-screen flex-col items-center overflow-hidden px-6 pb-24 pt-32 text-center"
>
	<div class="z-10 flex w-full max-w-none flex-col items-center px-6" in:fly={{ y: 20, duration: 1000, delay: 200 }}>
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
		>
			<span class="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
				>Senior Computer Science Engineer</span
			>
		</div>

		<h1 class="mb-8 text-6xl font-bold leading-[1.05] tracking-tighter md:text-8xl lg:text-[120px]">
			Designing and <br /> <span class="text-white/40">Engineering the Future</span>
		</h1>

		<p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl">
			I'm <span class="text-white">Taufeeq Ali</span>. A Senior Computer Science student and 
			Software Engineer focused on building scalable systems, cloud infrastructure, and 
			intelligent user experiences.
		</p>

		<div class="mb-20 flex flex-wrap justify-center gap-4">
			<a
				href="#projects"
				class="rounded-full bg-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-zinc-200"
			>
				Explore Projects
			</a>
			<a
				href="#about"
				class="rounded-full border border-white/10 bg-white/5 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
			>
				The Journey
			</a>
		</div>

		<!-- Mockup Element -->
		<div class="relative w-full max-w-none px-6 perspective-1000">
			<div class="glass-card relative overflow-hidden border-white/10 shadow-2xl rotate-x-5 scale-105 group transition-transform duration-700 hover:rotate-x-2">
				<img 
					src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400" 
					alt="System Mockup" 
					class="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
			</div>
			
			<!-- Background Glow -->
			<div class="absolute -bottom-20 left-1/2 -z-10 h-64 w-[80%] -translate-x-1/2 bg-white/5 blur-[100px]"></div>
		</div>
	</div>
</section>

<style>
	.rotate-x-5 {
		transform: rotateX(5deg);
	}
    .rotate-x-2 {
		transform: rotateX(2deg);
	}
    .perspective-1000 {
        perspective: 1000px;
    }
</style>

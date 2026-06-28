<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<section
	id="home"
	class="relative flex min-h-[100svh] flex-col items-center overflow-hidden px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-20 sm:pt-32"
>
	<div class="z-10 flex w-full max-w-7xl flex-col items-center" in:fly={{ y: 20, duration: 1000, delay: 200 }}>
		
		<h1 class="mb-5 max-w-[12ch] text-[3.1rem] font-bold leading-[0.98] tracking-tighter min-[380px]:text-6xl md:mb-8 md:max-w-none md:text-8xl lg:text-[120px]">
			Building systems <br />
		</h1>

		<span class="mb-6 font-bold leading-tight tracking-tighter text-yellow-500 min-[380px]:text-2xl md:mb-8 md:text-4xl lg:text-[40px]">that scale and perform</span>

		<p class="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/50 md:mb-12 md:text-xl">
			Hi, I'm <span class="text-yellow-50">Taufeeq Ali</span>. A
			Software Engineer focused on delivering products and solutions that solve real problems.
		</p>

		<div class="mb-12 flex w-full justify-center gap-6 md:mb-20">
			<a
				href="/Software Development Resume 2026.pdf"
				target="_blank"
				class="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 shadow-lg"
				aria-label="Resume"
			>
				<img src="https://api.iconify.design/vscode-icons:file-type-pdf2.svg" alt="" class="size-6" />
			</a>
			<a
				href="https://linkedin.com/in/taufeeq-ali"
				target="_blank"
				class="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 shadow-lg"
				aria-label="LinkedIn"
			>
				<img src="https://api.iconify.design/logos:linkedin-icon.svg" alt="" class="size-6" />
			</a>
			<a
				href="https://github.com/tfq26"
				target="_blank"
				class="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 shadow-lg"
				aria-label="GitHub"
			>
				<img src="https://api.iconify.design/simple-icons:github.svg?color=white" alt="" class="size-6" />
			</a>
		</div>

		<!-- Image Cards -->
		<div class="relative w-full mx-auto mt-12 perspective-1000">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
				<div class="glass-card mockup-card group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700">
					<img 
						src="/images/Taufeeq1.webp" 
						alt="Taufeeq Ali" 
						class="aspect-[4/5] h-auto w-full object-cover opacity-80 transition-opacity duration-1000 group-hover:opacity-100"
						loading="eager"
						fetchpriority="high"
						decoding="async"
					/>

				</div>
				
				<div class="glass-card mockup-card group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 delay-100">
					<img 
						src="/images/Taufeeq2.jpeg" 
						alt="Taufeeq Ali" 
						class="aspect-[4/5] h-auto w-full object-cover opacity-80 transition-opacity duration-1000 group-hover:opacity-100"
						loading="eager"
						fetchpriority="high"
						decoding="async"
					/>

				</div>
				
				<div class="glass-card mockup-card group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 delay-200">
					<img 
						src="/images/Taufeeq3.JPG" 
						alt="Taufeeq Ali" 
						class="aspect-[4/5] h-auto w-full object-cover opacity-80 transition-opacity duration-1000 group-hover:opacity-100"
						loading="eager"
						fetchpriority="high"
						decoding="async"
					/>
				</div>
			</div>
			
			<!-- Background Glow -->
			<div class="absolute -bottom-20 left-1/2 -z-10 h-64 w-[80%] -translate-x-1/2 bg-white/5 blur-[100px]"></div>
		</div>
	</div>
</section>

<style>
	.mockup-card {
		transform: none;
	}

	@media (min-width: 768px) {
		.mockup-card {
			transform: rotateX(5deg) scale(1.04);
		}

		.mockup-card:hover {
			transform: rotateX(2deg) scale(1.04);
		}
	}

    .perspective-1000 {
        perspective: 1000px;
    }
</style>

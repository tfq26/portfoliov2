<script lang="ts">
	const allIcons = [
		{ name: 'React', icon: 'https://cdn.simpleicons.org/react/white' },
		{ name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/white' },
		{ name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/white' },
		{ name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
		{ name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/white' },
		{ name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/white' },
		{ name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/white' },
		{ name: 'DotNet', icon: 'https://cdn.simpleicons.org/dotnet/white' },
		{ name: 'Java', icon: 'https://cdn.simpleicons.org/oracle/white' },
		{ name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/white' },
		{ name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/white' },
		{ name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/white' },
		{ name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/white' },
		{ name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/white' },
		{ name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/white' },
		{ name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/white' }
	];

	const categories = [
		{ 
			id: 'frontend', 
			label: 'Frontend', 
			color: 'group-hover:bg-blue-500/20',
			tech: 'React, Vue, Svelte, Tailwind'
		},
		{ 
			id: 'backend', 
			label: 'Backend', 
			color: 'group-hover:bg-amber-500/20',
			tech: 'Node.js, Java, .NET, SQL'
		},
		{ 
			id: 'cloud', 
			label: 'Cloud & Data', 
			color: 'group-hover:bg-purple-500/20',
			tech: 'Azure, AWS, Docker, NoSQL'
		},
		{ 
			id: 'ai', 
			label: 'AI / ML', 
			color: 'group-hover:bg-emerald-500/20',
			tech: 'Gemini, OpenAI, LangChain'
		}
	];
</script>

<section id="skills" class="relative w-full overflow-hidden px-6 py-32 md:py-48 bg-black">
	<div class="mx-auto w-full max-w-none">
		<div class="reveal mb-32 text-center">
			<h2 class="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
				Technical <span class="text-white/40">Proficiency.</span>
			</h2>
			<p class="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
				shuffling through the core technologies that power my architectural decisions and 
				engineering solutions.
			</p>
		</div>

		<!-- Animated Icon Carousel -->
		<div class="reveal mb-48 relative">
			<div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
			<div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
			
			<div class="flex overflow-hidden group">
				<div class="flex space-x-16 animate-scroll py-4 group-hover:pause">
					{#each [...allIcons, ...allIcons, ...allIcons] as item}
						<div class="flex flex-col items-center gap-6 min-w-[80px]">
							<div class="h-16 w-16 flex items-center justify-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 hover:scale-125">
								<img src={item.icon} alt={item.name} class="h-full w-full object-contain" />
							</div>
							<span class="text-[10px] font-bold uppercase tracking-widest text-white/10">{item.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Windows Icon Style Category Grid -->
		<div class="reveal max-w-2xl mx-auto">
			<div class="grid grid-cols-2 gap-4 md:gap-6">
				{#each categories as cat}
					<button class="group relative aspect-square glass-card border-white/5 hover:border-white/10 transition-all duration-700 text-left p-10 flex flex-col">
						<div class="absolute inset-0 {cat.color} opacity-0 transition-all duration-700 blur-2xl"></div>
						
						<div class="relative z-10 flex flex-col h-full">
							<div class="mb-4 flex items-center gap-2">
								<div class="h-2 w-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
								<span class="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60">Category</span>
							</div>
							
							<h3 class="text-3xl font-bold tracking-tighter text-white mb-2">{cat.label}</h3>
							<p class="text-xs text-white/20 group-hover:text-white/40 transition-colors mt-2 leading-relaxed">
								{cat.tech}
							</p>
						</div>

						<!-- Decorative Element -->
						<div class="absolute bottom-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
							<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
							</svg>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% { transform: translateX(0); }
		100% { transform: translateX(-33.33%); }
	}

	.animate-scroll {
		animation: scroll 60s linear infinite;
	}

	.pause {
		animation-play-state: paused;
	}
</style>

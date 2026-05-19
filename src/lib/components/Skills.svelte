<script lang="ts">
	const allIcons = [
		{ name: 'React', icon: 'https://api.iconify.design/logos:react.svg' },
		{ name: 'Vue.js', icon: 'https://api.iconify.design/logos:vue.svg' },
		{ name: 'Svelte', icon: 'https://api.iconify.design/logos:svelte-icon.svg' },
		{ name: 'Next.js', icon: 'https://api.iconify.design/logos:nextjs-icon.svg' },
		{ name: 'Tailwind', icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg' },
		{ name: 'TypeScript', icon: 'https://api.iconify.design/logos:typescript-icon.svg' },
		{ name: 'Node.js', icon: 'https://api.iconify.design/logos:nodejs-icon.svg' },
		{ name: 'DotNet', icon: 'https://api.iconify.design/logos:dotnet.svg' },
		{ name: 'Java', icon: 'https://api.iconify.design/logos:java.svg' },
		{ name: 'PostgreSQL', icon: 'https://api.iconify.design/logos:postgresql.svg' },
		{ name: 'MongoDB', icon: 'https://api.iconify.design/logos:mongodb-icon.svg' },
		{ name: 'Docker', icon: 'https://api.iconify.design/logos:docker-icon.svg' },
		{ name: 'Azure', icon: 'https://api.iconify.design/logos:microsoft-azure.svg' },
		{ name: 'AWS', icon: 'https://api.iconify.design/simple-icons:amazonaws.svg?color=white' },
		{ name: 'Firebase', icon: 'https://api.iconify.design/logos:firebase.svg' },
		{ name: 'OpenAI', icon: 'https://api.iconify.design/simple-icons:openai.svg?color=white' }
	];

	const categories = [
		{ 
			id: 'frontend', 
			label: 'Frontend', 
			skills: ['React', 'Svelte', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Accessibility', 'Responsive UI', 'Component Design']
		},
		{ 
			id: 'backend', 
			label: 'Backend', 
			skills: ['Node.js', 'Express', 'Java', '.NET', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Authentication', 'API Design']
		},
		{ 
			id: 'cloud', 
			label: 'Cloud & Data', 
			skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless', 'Firebase', 'Data Modeling', 'Observability', 'Infrastructure']
		},
		{ 
			id: 'ai', 
			label: 'AI / ML', 
			skills: ['OpenAI', 'Gemini', 'LangChain', 'Prompting', 'RAG', 'Embeddings', 'Vector Search', 'Evaluation', 'AI Agents', 'Automation']
		}
	];
</script>

<section id="skills" class="relative w-full overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-48">
	<div class="mx-auto w-full max-w-none">
		<div class="reveal mb-16 text-center md:mb-32">
			<h2 class="mb-5 text-4xl font-bold tracking-tighter md:mb-8 md:text-7xl">
				Technical <span class="text-yellow-500">Proficiency.</span>
			</h2>
			<p class="mx-auto max-w-2xl text-base leading-relaxed text-white/40 md:text-xl">
				shuffling through the core technologies that power my architectural decisions and 
				engineering solutions.
			</p>
		</div>

		<!-- Animated Icon Carousel -->
		<div class="reveal relative mb-20 md:mb-48">
			<div class="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-24 md:w-32"></div>
			<div class="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-24 md:w-32"></div>
			
			<div class="flex overflow-hidden group">
				<div class="animate-scroll flex space-x-8 py-4 group-hover:pause sm:space-x-12 md:space-x-16">
					{#each [...allIcons, ...allIcons, ...allIcons] as item}
						<div class="flex min-w-16 flex-col items-center gap-4 sm:min-w-20 md:gap-6">
							<div class="flex h-12 w-12 items-center justify-center opacity-60 transition-all duration-500 hover:scale-125 hover:opacity-100 md:h-16 md:w-16">
								<img src={item.icon} alt={item.name} class="h-full w-full object-contain" />
							</div>
							<span class="text-[10px] font-bold text-white/50">{item.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="reveal mx-auto w-full max-w-6xl">
			<div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 sm:grid sm:overflow-visible sm:snap-none sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 hide-scrollbar">
				{#each categories as cat}
					<div class="border-t border-white/10 pt-6 min-w-[85vw] snap-center sm:min-w-0">
						<div class="mb-6 flex items-center gap-3">
							<h3 class="text-xl font-bold tracking-tight text-yellow-500">{cat.label}</h3>
						</div>

						<ul class="space-y-3">
							{#each cat.skills as skill}
								<li class="items-center justify-center pb-2">
									<span class="text-sm font-medium text-white/85">{skill}</span>
								</li>
							{/each}
						</ul>
					</div>
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

	:global(.pause) {
		animation-play-state: paused;
	}

	.hide-scrollbar {
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none; /* Chrome, Safari and Opera */
	}
</style>

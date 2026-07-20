<script lang="ts">
	import { slide } from 'svelte/transition';

	interface Project {
		title: string;
		description: string;
		image: string;
		tags: string[];
		link: string;
		detail: string;
		highlights: string[];
		screenshots?: string[];
	}

	let active = $state<string | null>(null);

	const projects: Project[] = [
		{
			title: 'Pegasus Intelligence',
			description: 'High-performance data workspace merging database management with an AI-driven natural language querying engine.',
			image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c',
			tags: ['PostgreSQL', 'AI Querying', 'Data UX'],
			link: 'https://github.com/tfq26',
			detail: 'A workspace designed to make database exploration faster and more legible by pairing structured data workflows with natural language querying.',
			highlights: ['Natural language query layer', 'Schema-aware data navigation', 'Performance-focused workspace design'],
			screenshots: ['/images/pegasus1.png', '/images/pegasus2.png', '/images/pegasus3.png']
		},
		{
			title: 'Tempo Browser',
			description: 'A minimalist, performance-hardened browser built with Rust and Lit, featuring deterministic startup and resource intelligence.',
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			tags: ['Rust', 'Lit', 'Performance'],
			link: 'https://github.com/tfq26',
			detail: 'A focused browser experiment exploring startup determinism, lean interaction patterns, and resource visibility for everyday browsing.',
			highlights: ['Deterministic startup path', 'Minimal interaction shell', 'Runtime resource awareness']
		},
		{
			title: 'Janus Vault',
			description: 'Secure credential management system and infrastructure vault for managing sensitive enterprise secrets.',
			image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
			tags: ['Security', 'Secrets', 'Infrastructure'],
			link: 'https://github.com/tfq26',
			detail: 'A vault concept for managing sensitive application credentials with strong access boundaries and infrastructure-friendly workflows.',
			highlights: ['Credential lifecycle design', 'Access boundary modeling', 'Secure infrastructure workflows']
		},
		{
			title: 'Libra Assistant',
			description: 'Technical troubleshooting and Q&A engine built on Azure AI for precise guidance in distributed systems.',
			image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930',
			tags: ['Azure AI', 'Q&A', 'Support'],
			link: 'https://github.com/tfq26',
			detail: 'A technical assistant for distributed-system troubleshooting, using AI to make support answers more precise and context aware.',
			highlights: ['Azure AI grounding', 'Troubleshooting workflows', 'Distributed systems guidance'],
			screenshots: ['/images/libra1.webp', '/images/libra2.webp', '/images/libra3.webp']
		}
	];

	function toggle(project: Project) {
		active = active === project.title ? null : project.title;
	}
</script>

<section id="projects" class="relative w-full bg-black px-4 py-20 sm:px-6 md:py-48">
	<div class="mx-auto w-full max-w-6xl">
		<div class="reveal mb-16 md:mb-24">
			<div class="grid items-end gap-8 lg:grid-cols-2 lg:gap-12">
				<h2 class="text-4xl font-bold leading-none tracking-tighter min-[380px]:text-5xl md:text-8xl">
					Technical <br /> <span class="text-yellow-500">Portfolio.</span>
				</h2>
				<p class="mb-2 max-w-lg text-base leading-relaxed text-white/40 md:mb-4 md:text-xl">
					A selection of projects I've built across various domains, 
					from AI apps to Security tools to even a web browser.
				</p>
			</div>
		</div>

		<div class="reveal grid gap-4 md:grid-cols-2">
			{#each projects as project}
				<div
					class="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] transition-all duration-500 hover:border-yellow-500/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(234,179,8,0.05)]"
					class:md:col-span-2={active === project.title && !!project.screenshots}
				>
					<button
						type="button"
						aria-expanded={active === project.title ? 'true' : 'false'}
						onclick={() => toggle(project)}
						class="flex w-full items-start gap-4 p-5 text-left sm:gap-6 sm:p-6"
					>
						<div class="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-24 sm:w-36">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
								loading="lazy"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent"></div>
						</div>

						<div class="min-w-0 flex-1">
							<h3 class="mb-1.5 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-50 sm:text-xl">
								{project.title}
							</h3>
							<p class="max-w-2xl text-sm leading-relaxed text-white/50 line-clamp-2 sm:text-sm">
								{project.description}
							</p>
							<div class="mt-3 flex items-center gap-3">
								<span class="truncate text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors group-hover:text-white/60">
									{project.tags.join(' • ')}
								</span>
							</div>
						</div>

						<div class="flex shrink-0 items-center self-start pt-1">
							<div class="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-500 group-hover:border-yellow-500/40 group-hover:bg-yellow-500/10 group-hover:text-yellow-500 sm:size-10">
								<svg class="size-4 transition-transform duration-500 {active === project.title ? 'rotate-45' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
								</svg>
							</div>
						</div>
					</button>

					{#if active === project.title}
						<div class="border-t border-white/5 bg-black/30 px-5 pb-6 pt-5 sm:px-6 sm:pb-8" transition:slide={{ duration: 300 }}>
							<p class="mb-6 text-sm leading-relaxed text-white/70 sm:text-base">
								{project.detail}
							</p>

							<div class="mb-6">
								<h4 class="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Highlights</h4>
								<ul class="space-y-2">
									{#each project.highlights as highlight}
										<li class="flex items-start gap-2.5 text-sm text-white/50">
											<span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-yellow-500"></span>
											<span>{highlight}</span>
										</li>
									{/each}
								</ul>
							</div>

							{#if project.screenshots && project.screenshots.length > 0}
								<div class="mb-6">
									<h4 class="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Screenshots</h4>
									<div class="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
										{#each project.screenshots as screenshot}
											<img
												src={screenshot}
												alt="{project.title} screenshot"
												class="h-28 w-48 shrink-0 rounded-lg border border-white/10 object-cover opacity-85 transition-opacity hover:opacity-100 sm:h-32 sm:w-56"
												loading="lazy"
											/>
										{/each}
									</div>
								</div>
							{/if}

							<div class="flex items-center justify-end">
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black transition hover:bg-zinc-200"
								>
									View Repository
									<svg class="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
									</svg>
								</a>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>

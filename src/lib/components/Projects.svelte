<script lang="ts">
	import { fade, scale, slide } from 'svelte/transition';
	import { 
        ArrowUpRight,
        X
    } from 'lucide-svelte';

	let active = $state<any>(null);

	const projects = [
		{
			title: 'Pegasus Intelligence',
			description: 'High-performance data workspace merging database management with an AI-driven natural language querying engine.',
			image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c',
			tags: ['PostgreSQL', 'AI Querying', 'Data UX'],
			link: 'https://github.com/tfq26',
			detail: 'A workspace designed to make database exploration faster and more legible by pairing structured data workflows with natural language querying.',
			highlights: ['Natural language query layer', 'Schema-aware data navigation', 'Performance-focused workspace design']
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
			title: 'Cetus Platform',
			description: 'Decision intelligence platform utilizing Go orchestration and Python evaluation services for complex idea simulations.',
			image: 'https://images.unsplash.com/photo-1621314724606-fbf4c4231613',
			tags: ['Go', 'Python', 'Simulation'],
			link: 'https://github.com/tfq26',
			detail: 'An evaluation platform for modeling ideas, comparing outcomes, and coordinating simulation services across multiple runtimes.',
			highlights: ['Go-based orchestration', 'Python evaluation workers', 'Scenario comparison workflows']
		},
		{
			title: 'Blitz Financial',
			description: 'Enterprise-grade fintech dashboard and API infrastructure designed for high-trust financial signal processing.',
			image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
			tags: ['Fintech', 'Dashboards', 'APIs'],
			link: 'https://github.com/tfq26',
			detail: 'A financial operations interface focused on dense signal display, reliable API boundaries, and trust-centered product decisions.',
			highlights: ['Signal-first dashboard layout', 'API infrastructure planning', 'High-trust product surface']
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
			title: 'Kerbex Auth',
			description: 'Custom, extensible OIDC-compliant authentication worker replacing third-party services with localized data control.',
			image: 'https://images.unsplash.com/photo-1539193143244-c83d9436d633',
			tags: ['OIDC', 'Auth', 'Workers'],
			link: 'https://github.com/tfq26',
			detail: 'An authentication worker designed around extensibility, standards-aware identity flows, and better control over user data.',
			highlights: ['OIDC-aligned architecture', 'Worker-based auth flow', 'Localized data ownership']
		},
        {
			title: 'Libra Assistant',
			description: 'Technical troubleshooting and Q&A engine built on Azure AI for precise guidance in distributed systems.',
			image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930',
			tags: ['Azure AI', 'Q&A', 'Support'],
			link: 'https://github.com/tfq26',
			detail: 'A technical assistant for distributed-system troubleshooting, using AI to make support answers more precise and context aware.',
			highlights: ['Azure AI grounding', 'Troubleshooting workflows', 'Distributed systems guidance']
		},
		{
			title: 'Orion Distributed',
			description: 'Resource monitoring and storage service architecture managing jobs, telemetry, and distributed storage operations.',
			image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
			tags: ['Telemetry', 'Storage', 'Distributed'],
			link: 'https://github.com/tfq26',
			detail: 'A distributed operations architecture for coordinating jobs, observing telemetry, and managing storage-service behavior at scale.',
			highlights: ['Job coordination model', 'Telemetry surface planning', 'Distributed storage operations']
		}
	];


</script>

<section id="projects" class="relative w-full bg-black px-4 py-20 sm:px-6 md:py-48">
	<div class="mx-auto w-full max-w-none">
		<div class="reveal mb-16 md:mb-32">
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

		<div class="reveal mx-auto flex w-full max-w-5xl flex-col gap-3">
			{#each projects as project}
				<div class="group flex w-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] transition-all duration-500 hover:border-yellow-500/30 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(234,179,8,0.05)]">
					<button
						type="button"
						aria-expanded={active === project ? 'true' : 'false'}
						onclick={() => { active = active === project ? null : project; }}
						class="grid w-full grid-cols-1 items-center gap-6 p-4 text-left sm:grid-cols-[8rem_1fr_auto] sm:p-6"
					>
						<div class="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-28 sm:w-32">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
								loading="lazy"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent"></div>
						</div>

						<div class="min-w-0">
							<div class="mb-3 flex items-center gap-4">
								<h3 class="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-50 md:text-2xl">{project.title}</h3>
							</div>
							<p class="max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
								{project.description}
							</p>
							<div class="mt-4">
								<span class="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors group-hover:text-white/60">
									{project.tags.join(' • ')}
								</span>
							</div>
						</div>

						<div class="flex items-center justify-between gap-4 border-t border-white/5 pt-5 sm:border-t-0 sm:pt-0">
							<span class="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors duration-300 group-hover:text-yellow-500 sm:hidden">
								{active === project ? 'Close' : 'View Project'}
							</span>
							<div class="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-500 group-hover:border-yellow-500/40 group-hover:bg-yellow-500/10 group-hover:text-yellow-500">
								<ArrowUpRight size={18} class="transition-transform duration-500 {active === project ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}" />
							</div>
						</div>
					</button>

					{#if active === project}
						<div class="border-t border-white/5 bg-black/20 px-4 pb-6 pt-6 sm:px-6 sm:pb-8" transition:slide={{ duration: 300 }}>
							<p class="mb-8 text-base leading-relaxed text-white/70 md:text-lg">
								{project.detail}
							</p>
							
							<div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
								<div>
									<h4 class="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Highlights</h4>
									<ul class="space-y-3">
										{#each project.highlights as highlight}
											<li class="flex items-start gap-3 text-sm text-white/50">
												<span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-yellow-500"></span>
												<span>{highlight}</span>
											</li>
										{/each}
									</ul>
								</div>
								
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
									class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-black transition hover:bg-zinc-200"
								>
									View Repository
									<ArrowUpRight size={14} />
								</a>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>



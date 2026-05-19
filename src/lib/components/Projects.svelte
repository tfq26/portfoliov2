<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { 
        ArrowUpRight,
        Database, 
        Compass, 
        LineChart, 
        ShieldAlert, 
        Lock, 
        Fingerprint, 
        Server, 
        BrainCircuit,
        X
    } from 'lucide-svelte';

	let active = $state<any>(null);

	const projects = [
		{
			title: 'Pegasus Intelligence',
			description: 'High-performance data workspace merging database management with an AI-driven natural language querying engine.',
			icon: Database,
			image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c',
			tags: ['PostgreSQL', 'AI Querying', 'Data UX'],
			link: 'https://github.com/tfq26',
			detail: 'A workspace designed to make database exploration faster and more legible by pairing structured data workflows with natural language querying.',
			highlights: ['Natural language query layer', 'Schema-aware data navigation', 'Performance-focused workspace design']
		},
		{
			title: 'Tempo Browser',
			description: 'A minimalist, performance-hardened browser built with Rust and Lit, featuring deterministic startup and resource intelligence.',
			icon: Compass,
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			tags: ['Rust', 'Lit', 'Performance'],
			link: 'https://github.com/tfq26',
			detail: 'A focused browser experiment exploring startup determinism, lean interaction patterns, and resource visibility for everyday browsing.',
			highlights: ['Deterministic startup path', 'Minimal interaction shell', 'Runtime resource awareness']
		},
		{
			title: 'Cetus Platform',
			description: 'Decision intelligence platform utilizing Go orchestration and Python evaluation services for complex idea simulations.',
			icon: LineChart,
			image: 'https://images.unsplash.com/photo-1621314724606-fbf4c4231613',
			tags: ['Go', 'Python', 'Simulation'],
			link: 'https://github.com/tfq26',
			detail: 'An evaluation platform for modeling ideas, comparing outcomes, and coordinating simulation services across multiple runtimes.',
			highlights: ['Go-based orchestration', 'Python evaluation workers', 'Scenario comparison workflows']
		},
		{
			title: 'Blitz Financial',
			description: 'Enterprise-grade fintech dashboard and API infrastructure designed for high-trust financial signal processing.',
			icon: ShieldAlert,
			image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
			tags: ['Fintech', 'Dashboards', 'APIs'],
			link: 'https://github.com/tfq26',
			detail: 'A financial operations interface focused on dense signal display, reliable API boundaries, and trust-centered product decisions.',
			highlights: ['Signal-first dashboard layout', 'API infrastructure planning', 'High-trust product surface']
		},
		{
			title: 'Janus Vault',
			description: 'Secure credential management system and infrastructure vault for managing sensitive enterprise secrets.',
			icon: Lock,
			image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
			tags: ['Security', 'Secrets', 'Infrastructure'],
			link: 'https://github.com/tfq26',
			detail: 'A vault concept for managing sensitive application credentials with strong access boundaries and infrastructure-friendly workflows.',
			highlights: ['Credential lifecycle design', 'Access boundary modeling', 'Secure infrastructure workflows']
		},
		{
			title: 'Kerbex Auth',
			description: 'Custom, extensible OIDC-compliant authentication worker replacing third-party services with localized data control.',
			icon: Fingerprint,
			image: 'https://images.unsplash.com/photo-1539193143244-c83d9436d633',
			tags: ['OIDC', 'Auth', 'Workers'],
			link: 'https://github.com/tfq26',
			detail: 'An authentication worker designed around extensibility, standards-aware identity flows, and better control over user data.',
			highlights: ['OIDC-aligned architecture', 'Worker-based auth flow', 'Localized data ownership']
		},
        {
			title: 'Libra Assistant',
			description: 'Technical troubleshooting and Q&A engine built on Azure AI for precise guidance in distributed systems.',
			icon: BrainCircuit,
			image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930',
			tags: ['Azure AI', 'Q&A', 'Support'],
			link: 'https://github.com/tfq26',
			detail: 'A technical assistant for distributed-system troubleshooting, using AI to make support answers more precise and context aware.',
			highlights: ['Azure AI grounding', 'Troubleshooting workflows', 'Distributed systems guidance']
		},
		{
			title: 'Orion Distributed',
			description: 'Resource monitoring and storage service architecture managing jobs, telemetry, and distributed storage operations.',
			icon: Server,
			image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
			tags: ['Telemetry', 'Storage', 'Distributed'],
			link: 'https://github.com/tfq26',
			detail: 'A distributed operations architecture for coordinating jobs, observing telemetry, and managing storage-service behavior at scale.',
			highlights: ['Job coordination model', 'Telemetry surface planning', 'Distributed storage operations']
		}
	];

	const openProject = (project: any) => {
		active = project;
	};

	const closeProject = () => {
		active = null;
	};

	$effect(() => {
		if (typeof document === 'undefined') return;

		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeProject();
			}
		};

		document.body.style.overflow = active ? 'hidden' : '';
		window.addEventListener('keydown', handleKeydown);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeydown);
		};
	});
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
				<button
					type="button"
					onclick={() => openProject(project)}
					class="group grid w-full grid-cols-1 items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:grid-cols-[7rem_1fr_auto] sm:p-5"
				>
					<div class="relative h-44 overflow-hidden rounded-xl bg-white/5 sm:h-24">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
					</div>

					<div class="min-w-0">
						<div class="mb-3 flex items-center gap-3">
							<div class="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50">
								<project.icon size={17} />
							</div>
							<h3 class="text-xl font-bold tracking-tight text-white md:text-2xl">{project.title}</h3>
						</div>
						<p class="max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
							{project.description}
						</p>
						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/30">
									{tag}
								</span>
							{/each}
						</div>
					</div>

					<div class="flex items-center justify-between gap-3 border-t border-white/5 pt-4 sm:border-t-0 sm:pt-0">
						<span class="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors group-hover:text-brand-gold">
							View Project
						</span>
						<div class="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all group-hover:border-brand-gold/40 group-hover:text-brand-gold">
							<ArrowUpRight size={16} />
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if active}
	<div
		class="fixed inset-0 z-[100] grid place-items-center bg-black/80 px-4 py-6 backdrop-blur-xl"
		transition:fade={{ duration: 180 }}
		onclick={closeProject}
		role="presentation"
	>
		<div
			class="relative flex max-h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-2xl md:grid md:grid-cols-[1.1fr_0.9fr]"
			in:scale={{ duration: 180, start: 0.98 }}
			out:fade={{ duration: 120 }}
			onclick={(event) => event.stopPropagation()}
			onkeydown={(event) => {
				if (event.key === 'Escape') closeProject();
				event.stopPropagation();
			}}
			role="dialog"
			aria-modal="true"
			aria-label={`${active.title} project details`}
			tabindex="-1"
		>
			<button
				type="button"
				onclick={closeProject}
				class="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
				aria-label="Close project details"
			>
				<X size={18} />
			</button>

			<div class="relative min-h-64 overflow-hidden md:min-h-[34rem]">
				<img
					src={active.image}
					alt={active.title}
					class="h-full w-full object-cover opacity-75"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent md:bg-gradient-to-r"></div>
				<div class="absolute bottom-6 left-6 flex items-center gap-3">
					<div class="flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md">
						<active.icon size={22} />
					</div>
					<div>
						<div class="text-[10px] font-bold uppercase tracking-widest text-white/30">Case Study</div>
						<div class="text-lg font-bold text-white">{active.title}</div>
					</div>
				</div>
			</div>

			<div class="flex min-h-0 flex-col overflow-y-auto p-6 sm:p-8 md:p-10">
				<div class="mb-8">
					<h3 class="mb-4 text-3xl font-bold tracking-tighter text-white md:text-5xl">{active.title}</h3>
					<p class="text-base leading-relaxed text-white/55 md:text-lg">{active.detail}</p>
				</div>

				<div class="mb-8">
					<div class="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Technologies</div>
					<div class="flex flex-wrap gap-2">
						{#each active.tags as tag}
							<span class="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
								{tag}
							</span>
						{/each}
					</div>
				</div>

				<div class="mb-10">
					<div class="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Highlights</div>
					<ul class="space-y-3">
						{#each active.highlights as highlight}
							<li class="flex gap-3 text-sm leading-relaxed text-white/50 md:text-base">
								<span class="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold"></span>
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				</div>

				<a
					href={active.link}
					target="_blank"
					rel="noreferrer"
					class="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-black transition hover:bg-zinc-200"
				>
					View Repository
					<ArrowUpRight size={14} />
				</a>
			</div>
		</div>
	</div>
{/if}

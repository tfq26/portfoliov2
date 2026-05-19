<script lang="ts" runes>
	import BentoGrid from './BentoGrid.svelte';
	import BentoGridItem from './BentoGridItem.svelte';
	import { 
        Database, 
        Compass, 
        LineChart, 
        ShieldAlert, 
        Lock, 
        Fingerprint, 
        Server, 
        BrainCircuit 
    } from 'lucide-svelte';

	const projects = [
		{
			title: 'Pegasus Intelligence',
			description: 'High-performance data workspace merging database management with an AI-driven natural language querying engine.',
			icon: Database,
			image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c'
		},
		{
			title: 'Tempo Browser',
			description: 'A minimalist, performance-hardened browser built with Rust and Lit, featuring deterministic startup and resource intelligence.',
			icon: Compass,
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
		},
		{
			title: 'Cetus Platform',
			description: 'Decision intelligence platform utilizing Go orchestration and Python evaluation services for complex idea simulations.',
			icon: LineChart,
			image: 'https://images.unsplash.com/photo-1621314724606-fbf4c4231613'
		},
		{
			title: 'Blitz Financial',
			description: 'Enterprise-grade fintech dashboard and API infrastructure designed for high-trust financial signal processing.',
			icon: ShieldAlert,
			image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
		},
		{
			title: 'Janus Vault',
			description: 'Secure credential management system and infrastructure vault for managing sensitive enterprise secrets.',
			icon: Lock,
			image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
		},
		{
			title: 'Kerbex Auth',
			description: 'Custom, extensible OIDC-compliant authentication worker replacing third-party services with localized data control.',
			icon: Fingerprint,
			image: 'https://images.unsplash.com/photo-1539193143244-c83d9436d633'
		},
        {
			title: 'Libra Assistant',
			description: 'Technical troubleshooting and Q&A engine built on Azure AI for precise guidance in distributed systems.',
			icon: BrainCircuit,
			image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930'
		},
		{
			title: 'Orion Distributed',
			description: 'Resource monitoring and storage service architecture managing jobs, telemetry, and distributed storage operations.',
			icon: Server,
			image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276'
		}
	];
</script>

{#snippet header(project: any)}
	<div class="flex size-full flex-1 rounded-md overflow-hidden relative group">
		<img 
			src={project.image} 
			alt={project.title} 
			class="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
	</div>
{/snippet}

{#snippet title(project: any)}
	<strong class="text-lg tracking-tight">{project.title}</strong>
{/snippet}

{#snippet icon(project: any)}
	<project.icon size={18} class="text-white/40" />
{/snippet}

{#snippet description(project: any)}
	<p>{project.description}</p>
{/snippet}

<section id="projects" class="relative w-full px-6 py-32 md:py-48 bg-black">
	<div class="mx-auto w-full max-w-none">
		<div class="reveal mb-32">
			<div class="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-8">
				Engineering Portfolio
			</div>
			<div class="grid lg:grid-cols-2 gap-12 items-end">
				<h2 class="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
					Technical <br /> <span class="text-white/40">Portfolio.</span>
				</h2>
				<p class="text-xl text-white/40 leading-relaxed max-w-lg mb-4">
					A selection of systems I've designed and engineered across various domains, 
					from browser internals and secure vaults to distributed intelligence platforms.
				</p>
			</div>
		</div>

		<BentoGrid class="w-full max-w-none px-0">
			{#each projects as project, index}
				<BentoGridItem 
                    class="reveal {index === 0 || index === 3 || index === 4 || index === 7 ? 'md:col-span-2' : 'md:col-span-1'}"
                    header={() => header(project)}
                    title={() => title(project)}
                    icon={() => icon(project)}
                    description={() => description(project)}
                />
			{/each}
		</BentoGrid>
	</div>
</section>

<script lang="ts">
	import Timeline from './Timeline.svelte';
    import experience from '$lib/content/experience.json';
</script>

{#snippet renderItem(item: any)}
    <div class="reveal group relative flex flex-col py-4">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-brand-gold md:text-3xl">
            {item.role}
        </h3>
        <div class="mb-5 text-lg font-medium text-white/60 md:mb-6 md:text-xl">{item.company}</div>
        
        <p class="mb-8 max-w-2xl text-base leading-relaxed text-white/40 md:mb-10 md:text-lg">
            {item.description}
        </p>

        <div class="flex flex-wrap gap-3">
            {#each item.technologies as tech}
                <span class="text-[10px] font-bold uppercase tracking-widest text-white/20 border border-white/5 px-4 py-2 rounded-full bg-white/[0.02]">
                    {tech}
                </span>
            {/each}
        </div>
    </div>
{/snippet}

<section id="experience" class="relative w-full bg-black">
	<Timeline 
        title="Timeline of Experience" 
        description="A timeline of my growth in the industry, from initial internships to architectural leadership in academic and professional projects."
        items={experience}
        {renderItem}
    />
</section>

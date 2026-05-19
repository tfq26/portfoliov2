<script lang="ts" runes>
	import Timeline from './Timeline.svelte';
    import experience from '$lib/content/experience.json';
</script>

{#snippet renderItem(item: any)}
    <div class="reveal group relative flex flex-col py-4">
        <h3 class="text-3xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors mb-2">
            {item.role}
        </h3>
        <div class="text-xl text-white/60 font-medium mb-6">{item.company}</div>
        
        <p class="text-lg leading-relaxed text-white/40 mb-10 max-w-2xl">
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
        title="Technical Chronicle." 
        description="A timeline of my growth in the industry, from initial internships to architectural leadership in academic and professional projects."
        items={experience}
        {renderItem}
    />
</section>

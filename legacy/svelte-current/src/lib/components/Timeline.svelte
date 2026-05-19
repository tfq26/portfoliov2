<script lang="ts" runes>
	import { onMount } from 'svelte';

	let { 
        items = [], 
        title = "", 
        description = "",
        renderItem
    } = $props();

	let timelineRef: HTMLElement | null = $state(null);
	let height = $state(0);
	let scrollProgress = $state(0);

	onMount(() => {
		const updateHeight = () => {
			if (timelineRef) {
				height = timelineRef.getBoundingClientRect().height;
			}
		};

		const handleScroll = () => {
			if (timelineRef) {
				const rect = timelineRef.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const start = rect.top;
				const end = rect.bottom;
				
                // Calculate progress from 10% of window to 50%
                const progress = (windowHeight * 0.1 - start) / (end - start);
				scrollProgress = Math.min(Math.max(progress, 0), 1);
			}
		};

		updateHeight();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', updateHeight);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateHeight);
		};
	});
</script>

<div class="w-full bg-black font-sans md:px-10">
	<div class="mx-auto w-full max-w-none px-6 py-20 md:px-8 lg:px-10">
		<h2 class="mb-8 max-w-4xl text-5xl font-bold tracking-tighter text-white md:text-7xl">
			{title}
		</h2>
		<p class="max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl">
			{description}
		</p>
	</div>

	<div bind:this={timelineRef} class="relative z-0 mx-auto w-full max-w-none pb-20">
		{#each items as item, index}
			<div class="flex justify-start pt-10 md:gap-10 md:pt-40">
				<div
					class="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
				>
					<div
						class="absolute left-3 flex size-10 items-center justify-center rounded-full bg-black md:left-3"
					>
						<div
							class="size-4 rounded-full border border-white/10 bg-white/5 p-2"
						></div>
					</div>
					<h3
						class="hidden text-xl font-bold text-white/20 md:block md:pl-20 md:text-5xl"
                        style:color={scrollProgress > (index / items.length) ? 'white' : 'rgba(255,255,255,0.2)'}
                        style:transition="color 0.5s ease"
					>
						{item.label}
					</h3>
				</div>
				
                <div class="relative w-full pl-20 pr-4 md:pl-4">
                    {#if renderItem}
                        {@render renderItem(item)}
                    {/if}
                </div>
			</div>
		{/each}

		<!-- Timeline Line -->
		<div
			style:height="{height}px"
			class="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-8"
		>
			<div
				class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-brand-gold via-blue-500 to-transparent transition-all duration-300"
				style:height="{scrollProgress * 100}%"
                style:opacity={scrollProgress > 0 ? 1 : 0}
			></div>
		</div>
	</div>
</div>

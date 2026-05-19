<script lang="ts">
	let { 
        class: className = "",
        header,
        icon,
        title,
        description
    } = $props();
</script>

<div
	class="group/bento shadow-input row-span-1 flex min-h-72 flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-[#0a0a0a] p-4 transition duration-200 hover:border-white/20 hover:shadow-xl md:min-h-0 {className}"
>
	<div class="flex min-h-40 w-full flex-1 overflow-hidden rounded-xl md:h-full md:min-h-[6rem]">
		{#if header}
            {@render header()}
        {/if}
	</div>
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<div class="flex items-center gap-2">
            {#if icon}
                {@render icon()}
            {/if}
            <div class="font-sans font-bold text-white mb-1 mt-2">
                {#if title}
                    {@render title()}
                {/if}
            </div>
        </div>
		<div class="font-sans text-sm font-normal leading-relaxed text-white/40 md:text-xs">
			{#if description}
                {@render description()}
            {/if}
		</div>
	</div>
</div>

<script lang="ts" runes>
	let { 
        class: className = "",
        header,
        icon,
        title,
        description
    } = $props();
</script>

<div
	class="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-[#0a0a0a] p-4 transition duration-200 hover:shadow-xl hover:border-white/20 {className}"
>
	<div class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl overflow-hidden">
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
		<div class="font-sans text-xs font-normal text-white/40 leading-relaxed">
			{#if description}
                {@render description()}
            {/if}
		</div>
	</div>
</div>

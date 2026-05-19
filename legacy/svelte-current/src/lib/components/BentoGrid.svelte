<script lang="ts" runes>
	let { class: className, children } = $props();
</script>

<div class="mx-auto grid w-full max-w-none grid-cols-1 gap-6 px-6 md:auto-rows-[22rem] md:grid-cols-3 {className}">
	{#if children}
		{@render children()}
	{/if}
</div>

<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	let { project, isLarge = false } = $props();

	let dialog: HTMLDialogElement;
	let swiperEl: HTMLElement;

	function openModal() {
		dialog.showModal();
		document.body.style.overflow = 'hidden';

		if (swiperEl && !(swiperEl as any).swiper) {
			new Swiper(swiperEl, {
				modules: [Navigation, Pagination, Autoplay],
				loop: true,
				autoplay: { delay: 4000 },
				pagination: { el: '.swiper-pagination', clickable: true }
			});
		}
	}

	function closeModal() {
		dialog.close();
		document.body.style.overflow = '';
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
    class="group relative flex flex-col h-full bg-[#111] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden" 
    onclick={openModal}
>
	<!-- Image Section -->
	<div class="relative w-full aspect-video overflow-hidden">
		<img
			src={project.image}
			alt={project.title}
			class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
			loading="lazy"
			decoding="async"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
	</div>

	<div class="flex flex-col p-8 flex-grow">
		<div class="mb-4">
			<h3 class="text-2xl font-bold tracking-tight text-white mb-2">{project.title}</h3>
			<p class="text-sm leading-relaxed text-white/40 line-clamp-2">
				{project.description}
			</p>
		</div>

		<div class="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
			<span class="text-[10px] font-medium uppercase tracking-widest text-white/40 truncate mr-4">
				{project.tags.join(' • ')}
			</span>
			<span class="text-[10px] font-bold uppercase tracking-widest text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
				View →
			</span>
		</div>
	</div>
</div>

<!-- Modal -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	class="project-modal m-auto max-w-6xl overflow-hidden rounded-3xl border-none bg-transparent p-0 outline-none w-[95vw]"
	onclick={(e) => e.target === dialog && closeModal()}
>
	<div class="modal-content relative flex w-full flex-col overflow-hidden border border-white/10 bg-[#050505] shadow-2xl lg:flex-row">
		<button
			onclick={closeModal}
			class="absolute right-6 top-6 z-30 rounded-full border border-white/10 bg-white/5 p-2 text-white/40 backdrop-blur-md hover:bg-white/10 hover:text-white"
			aria-label="Close Project Details"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
		</button>

		<div class="relative h-72 bg-black lg:h-auto lg:w-[60%]">
			<div bind:this={swiperEl} class="swiper h-full w-full">
				<div class="swiper-wrapper">
					<div class="swiper-slide flex items-center justify-center">
						<img src={project.image} alt={project.title} class="h-full w-full object-cover" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>

		<div class="flex flex-col p-10 lg:w-[40%] lg:p-16">
			<div class="mb-10">
				<h2 class="mb-4 text-4xl font-bold tracking-tighter text-white">{project.title}</h2>
				<div class="h-1 w-12 bg-brand-gold rounded-full"></div>
			</div>

			<p class="mb-10 text-lg leading-relaxed text-white/60">
				{project.description}
			</p>

			<div class="mb-12">
				<h4 class="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Technologies</h4>
				<p class="text-sm font-medium text-white/60">
					{project.tags.join(' • ')}
				</p>
			</div>

			<div class="mt-auto flex gap-6">
				<a
					href={project.link}
					target="_blank"
					class="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-zinc-200 transition-all"
				>
					Repository
				</a>
			</div>
		</div>
	</div>
</dialog>

<style>
	.project-modal::backdrop {
		background: rgba(0, 0, 0, 0.95);
		backdrop-filter: blur(20px);
	}
</style>

<script lang="ts">
	const contactLinks = [
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/taufeeq-ali',
			icon: 'https://api.iconify.design/logos:linkedin-icon.svg'
		},
		{
			label: 'Resume',
			href: '/Software Development Resume 2026.pdf',
			icon: 'https://api.iconify.design/vscode-icons:file-type-pdf2.svg'
		},
		{
			label: 'Email',
			href: 'mailto:taufeeq2608@gmail.com',
			icon: 'https://api.iconify.design/material-symbols:mail-outline.svg?color=white'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/tfq26',
			icon: 'https://api.iconify.design/simple-icons:github.svg?color=white'
		}
	];
</script>

<footer class="relative w-full overflow-hidden border-t border-white/10 bg-black px-4 py-12 sm:px-6 md:py-16">
	<div class="mx-auto flex w-full max-w-7xl flex-col gap-10">
		<div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
			<div>
				<a href="#home" class="text-2xl font-bold tracking-tighter text-white">
					Taufeeq <span class="text-yellow-500">Ali</span>
				</a>
			</div>

			<div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
				{#each contactLinks as link}
					<a
						href={link.href}
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
						class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
					>
						<img src={link.icon} alt="" class="size-4 object-contain" aria-hidden="true" />
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>

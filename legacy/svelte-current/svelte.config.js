import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// Bulletproof adapter import for IDE Language Servers that fail to resolve it
let adapter = () => ({ name: 'fallback-adapter', adapt: () => {} });
try {
	const module = await import('@sveltejs/adapter-auto');
	adapter = module.default;
} catch (e) {
	// IDE language server failed to resolve, fallback used silently
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$content: path.resolve('./src/lib/content')
		}
	}
};

export default config;

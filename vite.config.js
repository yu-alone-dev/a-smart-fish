import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'; 

export default defineConfig({
	base: 'a-smart-fish',
	plugins: [
		sveltekit(),
		viteStaticCopy({
		targets: [
			{
			src: 'static/*',
			dest: '.'
			}
		]
		})
	]
});

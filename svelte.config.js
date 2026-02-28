import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Игнорируем только ссылки на скачивание с Google Drive
				if (path.includes('https://drive.google.com/uc?export=download&')) {
					console.warn(`⚠️ Пропускаем ссылку на скачивание с Google Drive: ${path}`);
					return;
				}
				
				// Для всех остальных ошибок - показываем предупреждение
				console.warn(`⚠️ Ошибка при пререндеринге ${path}: ${message}`);
				// Можно ничего не возвращать или вернуть void
			}
		}
  }
};

export default config;
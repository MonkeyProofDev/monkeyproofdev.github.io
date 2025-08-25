// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://monkeyproofdev.github.io',
    //base: '/monkeyproofdev.github.io',
    integrations: [mdx(), sitemap()],
});

import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import { maizzle } from '@maizzle/framework';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
        maizzle({
            root: 'resources/js/emails',
            content: ['./**/*.vue'],
            output: {
                path: 'resources/views/emails',
                extension: 'blade.php',
            },
            static: {
                source: ['resources/js/emails/images'],
            },
            html: {
                format: true,
            },
            css: {
                safe: true,
                purge: true,
                inline: true,
            }
        }),
    ],
});

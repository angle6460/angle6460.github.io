import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// User site served from root (https://angle6460.github.io/), so base stays '/'.
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            // GitHub Pages serves 404.html for unknown paths, so build it as a second page.
            input: ['./index.html', './404.html'],
        },
    },
})

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// User site served from root (https://angle6460.github.io/), so base stays '/'.
export default defineConfig({
    plugins: [react()],
})

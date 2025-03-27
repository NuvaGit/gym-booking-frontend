import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use root path for Amplify deployment
  base: '/',
  plugins: [react()],
})
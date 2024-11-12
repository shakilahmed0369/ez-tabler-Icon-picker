import { defineConfig } from 'vite'
import fs from 'fs'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'EzIconPicker',
      fileName: 'ez-icon-picker',
      formats: ['iife']
    },
    minify: 'terser',
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `ez-icon-picker.min.js`,
        name: 'EzIconPicker',
        format: 'iife'
      }
    }
  },
  plugins: [{
    name: 'copy-css',
    closeBundle() {
      fs.copyFileSync('src/icon-picker.css', 'dist/ez-icon-picker.css')
    }
  }]
}) 
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/icon-picker.js'),
      name: 'EzIconPicker',
      fileName: 'ez-icon-picker',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        format: 'iife',
        assetFileNames: 'ez-icon-picker.[ext]'
      }
    }
  }
})
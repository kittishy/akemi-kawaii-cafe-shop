const { defineConfig } = require('vite')
const path = require('path')
const tailwindNesting = require('tailwindcss/nesting');
const autoprefixer = require('autoprefixer')

module.exports = defineConfig({
  plugins: [tailwindNesting(), autoprefixer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

const { defineConfig } = require('vite')
const path = require('path')
const tailwindNesting = require('tailwindcss/nesting')
const autoprefixer = require('autoprefixer')

module.exports = defineConfig({
  plugins: [tailwindNesting(), autoprefixer()],
    resolve: {
        alias: {
      '@': path.resolve(__dirname, './src'),
        }
    },
    build: {
        rollupOptions: {
            external: ['react-icons/fa'],
            output: {
                globals: {
          'react-icons/fa': 'ReactIconsFa',
                }
            }
        }
    }
})

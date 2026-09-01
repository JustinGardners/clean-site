import { build } from 'esbuild'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== 'production'

try {
  console.log('⚡ Bundling Alpine.js layer...')
  await build({
    entryPoints: [resolve(__dirname, 'src/main.ts')],
    outfile: resolve(__dirname, 'public/js/alpine.bundle.js'),
    bundle: true,
    format: 'iife',
    target: ['es2018'],
    minify: !isDev,
    sourcemap: isDev
  })
  console.log('✅ Alpine.js layer bundled to public/js/alpine.bundle.js')
} catch (error) {
  console.error('❌ Alpine.js layer bundle failed:', error)
  process.exit(1)
}

import * as sass from 'sass'
import browserslist from 'browserslist'
import { transform, browserslistToTargets } from 'lightningcss'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const inputFile = resolve(__dirname, 'assets/scss/main.scss')
const outputFile = resolve(__dirname, 'assets/css/main.css')

const targets = browserslistToTargets(
  browserslist([
    'last 2 Chrome versions',
    'last 2 Edge versions',
    'last 2 Firefox versions',
    'last 2 Safari versions',
  ])
)

try {
  // Step 1: Compile SCSS to CSS
  console.log('📦 Compiling SCSS to CSS...')
  const result = sass.compile(inputFile, {
    loadPaths: [
      resolve(__dirname, '../../node_modules'),
      resolve(__dirname, 'assets/scss')
    ],
    quietDeps: true,
    silenceDeprecations: [
      'color-functions',
      'import',
      'slash-div',
      'global-builtin',
      'if-function'
    ],
    logger: {
      debug(message, options) {
        const location = options?.span
          ? `${options.span.url?.pathname ?? 'scss'}:${options.span.start.line + 1}`
          : 'scss'
        console.log(`🐞 Sass @debug ${location}: ${message}`)
      },
      warn(message, options) {
        const location = options?.span
          ? `${options.span.url?.pathname ?? 'scss'}:${options.span.start.line + 1}`
          : 'scss'
        console.warn(`⚠️ Sass @warn ${location}: ${message}`)
      }
    }
  })
  const compiledCSS = result.css
  console.log('✅ SCSS compiled successfully')

  // Step 2: Process CSS through Lightning CSS
  console.log('⚡ Processing CSS with Lightning CSS...')
  const { code: optimizedCSS } = transform({
    code: Buffer.from(compiledCSS),
    minify: true,
    customMedia: true,
    drafts: {
      colors: true,
      customMedia: true
    },
    targets
  })
  console.log('✅ CSS optimized with Lightning CSS')

  // Step 3: Write optimized CSS to file
  mkdirSync(dirname(outputFile), { recursive: true })
  writeFileSync(outputFile, optimizedCSS)
  console.log(`✨ Optimized CSS written to ${outputFile}`)
} catch (error) {
  console.error('❌ CSS build failed:', error)
  process.exit(1)
}

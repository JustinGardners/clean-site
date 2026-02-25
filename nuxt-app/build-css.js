import sass from 'sass'
import { transform } from 'lightningcss'
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, resolve } from 'path'

const inputFile = './app/assets/scss/main.scss'
const outputFile = './app/assets/css/main.css'

try {
  // Step 1: Compile SCSS to CSS
  console.log('📦 Compiling SCSS to CSS...')
  const result = sass.renderSync({
    file: inputFile,
    includePaths: [
      resolve('./node_modules'),
      resolve('./app/assets/scss')
    ]
  })
  const compiledCSS = result.css.toString()
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
    targets: {
      chrome: 90,
      edge: 90,
      firefox: 88,
      safari: 14,
    }
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

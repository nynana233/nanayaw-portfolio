/**
 * Patches the PostCSS package inside @nuxt/postcss8 to export ./package.json.
 * Newer PostCSS versions (8.4.32+) restrict their exports, which breaks
 * the bundled css-loader on Node 18+.
 */
const fs = require('fs')
const path = require('path')

const postcssPackagePath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@nuxt',
  'postcss8',
  'node_modules',
  'postcss',
  'package.json'
)

if (fs.existsSync(postcssPackagePath)) {
  const pkg = JSON.parse(fs.readFileSync(postcssPackagePath, 'utf8'))

  if (pkg.exports && !pkg.exports['./package.json']) {
    pkg.exports['./package.json'] = './package.json'
    fs.writeFileSync(postcssPackagePath, JSON.stringify(pkg, null, 2) + '\n')
    console.log('Patched postcss exports in @nuxt/postcss8')
  }
}

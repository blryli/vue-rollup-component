import base from './rollup.config.base'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueFormLayer',
    file: 'dist/vue-form-layer.min.js',
    format: 'iife',
  },
})

config.plugins.push(uglify({}, minify))

export default config

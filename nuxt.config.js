let path = require('path')

console.log('process.env.MODO:', process.env.MODO)
let dev = (process.env.MODO !== 'produccion')
console.log('dev:', dev)

process.env.TZ = 'America/Santiago'

let Config = {
	env: {
		inicio: new Date(),
		version: 'v1.3.1',
		dev: (process.env.MODO !== 'produccion')
	},
	css: ['~/sass/base.sass'],
	head: {
		meta: [
			{ charset: 'utf-8', hid: 'charset' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1', hid: 'viewport' }
		]
	},
	build: {
		postcss: {
			plugins: {
				'postcss-discard-comments': { comments: { removeAll: true } },
				'postcss-preset-env': {}
			}
		},
		// splitChunks: {
		// 	layouts: true
		// },
		babel: {
			presets ({ isServer }) {
				const targets = isServer ? { node: 'current' } : { ie: 11 }
				return [ [ require.resolve('@nuxt/babel-preset-app'), { buildTarget: isServer ? 'server' : 'client', targets } ] ]
			},
			'comments': false
		},
		// extractCSS: true,
		extend (config, ctx) {
			config.resolve.alias['~sass'] = path.join(__dirname, 'sass')
			config.resolve.alias['sass'] = path.join(__dirname, 'sass')
		}
	},
	render: {
		static: { maxAge: 1000 * 60 * 60 * 24 * 7 }
	},
	plugins: [],
	modules: [
		['./modules/back', { expressPath: 'server', routesPath: 'server' }]
	]
}

module.exports = Config

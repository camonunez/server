import { Router } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

const router = Router()

router.use(helmet({ noCache: true }))
router.use(bodyParser.urlencoded({
	extended: false,
	limit: '2mb'
}))
router.use(bodyParser.json({ limit: '2mb' }))
router.use(cookieParser())

router.use((req, res, next) => {
	res.setHeader('charset', 'utf-8')
	res.setHeader('Content-language', 'es')
	next()
})

// router.get('/', async (req, res) => {
// 	try {
// 		const thing = await Promise.resolve({ one: 'two' }) // async/await!
// 		return res.json({ ...thing, hello: 'world' }) // object-rest-spread!
// 	} catch (e) {
// 		return res.json({ error: e.message })
// 	}
// })

module.exports = router

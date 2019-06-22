import { Router } from 'express'
const router: Router = Router()
import thermoData from './thermoData'

router.use('/', thermoData)

export default router

import { Router } from 'express'

import { routeNames } from '../../../config'
import { getData } from '../../../controller'

const router: Router = Router()

router.route(routeNames.THERMO_STAT_DATA)
      .get(getData)



export default router

import { Request, Response } from 'express'

import app from './app'

// const swaggerUi = require('swagger-ui-express')// tslint:disable-line
// const swaggerJSDoc = require('swagger-jsdoc')// tslint:disable-line
// const swaggerSpec = swaggerJSDoc(swaggerOptions)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('*', (req: Request, res: Response) => {
  res.status(404).send({
    message: 'Page Not Found',
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Magic Happens on port ' + PORT)
})

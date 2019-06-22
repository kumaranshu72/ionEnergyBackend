import 'babel-polyfill'
import * as bodyParser from 'body-parser'
import express from 'express'
import { connect } from 'mongoose'
const cors = require('cors') // tslint:disable-line

import { mongoUrl } from './config'
import router from './routes'

class App {
  public app: express.Application

  constructor() {
      this.app = express()
      this.config()
      this.mountRoutes()
  }

  private config(): void {
    // DB connection
    connect(mongoUrl, {useNewUrlParser: true})
    // enabling cors
    this.app.use(cors())
    // support application/json type post data
    this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    // this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private mountRoutes(): void {
     this.app.use(router)
  }
}

export default new App().app

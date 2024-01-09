import express, { Express, Router } from 'express'
import dogRouter from './dog.router'
import helloWorldRouter from './hello-world.router'
import bookRouter from './book.router'

export default function routerApi(app: Express): void {
  const router: Router = express.Router()
  app.use('/api/v1', router)
  router.use('/hello-world', helloWorldRouter)
  router.use('/dog', dogRouter)
  router.use('/book', bookRouter)
}

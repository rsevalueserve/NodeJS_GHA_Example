import express, { Request, Response } from 'express'
import ApiHelloWorldController from '../controllers/hello-world.controller'

const router = express.Router()
const apiController = new ApiHelloWorldController()

router.get('/', async (_req: Request, res: Response) => {
  const response = await apiController.getHelloWorld()
  return res.send(response)
})

export default router

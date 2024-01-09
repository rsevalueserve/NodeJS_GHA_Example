import express, { Request, Response } from 'express'
import ApiDogController from '../controllers/dog.controller'

const router = express.Router()
const apiController = new ApiDogController()

router.get('/', async (_req: Request, res: Response) => {
  const response = await apiController.getDogResponse()
  return res.send(response)
})

export default router

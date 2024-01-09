import express, { Request, Response } from 'express'
import ApiBookController from '../controllers/book.controller'

const router = express.Router()
const apiController = new ApiBookController()

router.post('/', async (_req: Request, res: Response) => {
  const response = await apiController.postORMBook(_req.body)
  return res.send(response)
})

router.get('/', async (_req: Request, res: Response) => {
  const response = await apiController.getORMBook()
  return res.send(response)
})

export default router

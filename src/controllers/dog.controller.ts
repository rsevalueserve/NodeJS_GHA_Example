import { Get, Route } from 'tsoa'
import { ErrorResponse, DogResponse } from '../types/schemas'
import { fetchDogData } from './../services/dog.service'

@Route('api/v1/dog')
export default class ApiDogController {
  @Get('/')
  public async getDogResponse(): Promise<DogResponse | ErrorResponse> {
    try {
      const data = await fetchDogData()
      if (!data) {
        return {
          error: 'Data not found'
        }
      }
      return data
    } catch (error) {
      console.error('Error in controller:', error)
      return {
        error: 'An error occurred on the server.'
      }
    }
  }
}

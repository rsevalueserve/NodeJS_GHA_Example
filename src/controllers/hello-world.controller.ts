import { Get, Route } from 'tsoa'
import { HelloWorldResponse, ErrorResponse } from '../types/schemas'
import { fetchHelloWorld } from './../services/hello-world.service'

@Route('api/v1/hello-world')
export default class ApiHelloWorldController {
  @Get('/')
  public async getHelloWorld(): Promise<HelloWorldResponse | ErrorResponse> {
    try {
      const data = await fetchHelloWorld()
      if (!data) {
        return { error: 'Data not found' }
      }
      return data
    } catch (error) {
      console.error('Error in controller:', error)
      return { error: 'An error occurred on the server.' }
    }
  }
}

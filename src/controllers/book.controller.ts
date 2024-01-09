import { Body, Get, Post, Route } from 'tsoa'
import {
  ErrorResponse,
  BookPostResponse,
  BookGetResponse,
  BookPostRequest
} from '../types/schemas'
import { insertBook, fetchBookData } from './../services/book.service'

@Route('api/v1/book')
export default class ApiBookController {
  @Post('/')
  public async postORMBook(
    @Body() requestBody: BookPostRequest
  ): Promise<BookPostResponse | ErrorResponse> {
    try {
      const data = await insertBook(
        requestBody.name,
        requestBody.author,
        requestBody.editorial,
        requestBody.pages,
        requestBody.year
      )
      if (!data) {
        return { error: 'Data not found' }
      }
      return data
    } catch (error) {
      console.error('Error in controller:', error)
      return { error: 'An error occurred on the server.' }
    }
  }

  @Get('/')
  public async getORMBook(): Promise<BookGetResponse | ErrorResponse> {
    try {
      const data = await fetchBookData()
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

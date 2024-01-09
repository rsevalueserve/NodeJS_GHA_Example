import { Book } from '../entity/Book.entity'

/**
 * Error response type
 */
export interface ErrorResponse {
  error: string
}

/**
 * Hello World API response type
 */
export interface HelloWorldResponse {
  data: string
}

/**
 * Doggo API response type
 */
export interface DogResponse {
  name: string
  age: string
  image: string
}

/**
 * Post Book API request type
 */
export interface BookPostRequest {
  name: string
  author: string
  editorial: string
  pages: number
  year: number
}

/**
 * Post Book API response type
 */
export interface BookPostResponse {
  message: string
  name: string
}

/**
 * Get Book API response type
 */
export interface BookGetResponse {
  books: Array<Book>
}

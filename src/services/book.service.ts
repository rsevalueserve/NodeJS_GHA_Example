import { AppDataSource } from '../data/data-source'
import { Book } from '../entity/Book.entity'
import { BookPostResponse, BookGetResponse } from '../types/schemas'

export async function insertBook(
  name: string,
  author: string,
  editorial: string,
  pages: number,
  year: number
): Promise<BookPostResponse | null> {
  try {
    const book = new Book()
    book.name = name
    book.author = author
    book.editorial = editorial
    book.pages = pages
    book.year = year

    await AppDataSource.manager.save(book)
    const data: BookPostResponse = {
      message: 'New book created',
      name: book.name
    }

    return data
  } catch (error) {
    console.error('Error in service:', error)
    throw new Error('Failed to retrieve data')
  }
}

export async function fetchBookData(): Promise<BookGetResponse | null> {
  try {
    const bookRepository = AppDataSource.getRepository(Book)
    const allBooks = await bookRepository.find()

    const data: BookGetResponse = {
      books: allBooks
    }

    return data
  } catch (error) {
    console.error('Error in service:', error)
    throw new Error('Failed to retrieve data')
  }
}

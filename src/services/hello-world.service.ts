import { HelloWorldResponse } from '../types/schemas'

export async function fetchHelloWorld(): Promise<HelloWorldResponse | null> {
  try {
    const data: HelloWorldResponse = {
      data: 'Hello World!'
    }

    return data
  } catch (error) {
    console.error('Error in service:', error)
    throw new Error('Failed to retrieve data')
  }
}

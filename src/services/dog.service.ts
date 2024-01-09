import { DogResponse } from '../types/schemas'

export async function fetchDogData(): Promise<DogResponse | null> {
  try {
    const data: DogResponse = {
      name: 'Doggo',
      age: '5',
      image:
        'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
    }

    return data
  } catch (error) {
    console.error('Error in service:', error)
    throw new Error('Failed to retrieve data')
  }
}

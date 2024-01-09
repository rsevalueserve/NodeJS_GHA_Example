import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import helmet from 'helmet'
import path from 'path'
import swaggerUi from 'swagger-ui-express'
import 'reflect-metadata'
import routerApi from './routes/'
import { AppDataSource } from './data/data-source'

dotenv.config({ path: path.join(__dirname, '.env') })

AppDataSource.initialize()
  .then(() => {
    console.log('App Data source initialized')
  })
  .catch((error) => {
    console.log('Error during data source initialization ', error)
  })

const port = process.env.SERVER_PORT || 3000
const app = express()

app.use(cors())
app.use(helmet())

// Setup cookieParser
app.use(cookieParser())

// Setup bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000']
const options: cors.CorsOptions = {
  origin: allowedOrigins
}

app.use(cors(options))

app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json'
    }
  })
)

routerApi(app)

app.listen(port, () => {
  return console.log(
    `Express server is listening at http://localhost:${port} 🚀`
  )
})

export { app }

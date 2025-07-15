import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('./public'))

app.get('/api',(req,res)=>{
  res.send('<h1>Welcome to server</h1>')
})


export default app
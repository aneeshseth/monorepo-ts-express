import express from 'express'
import { ensureDbConnected } from './lib/db'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
const port = 3009



app.use(express.json())
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
ensureDbConnected()

import userRoutes from './Routes/userRoutes'

app.use("/", userRoutes)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
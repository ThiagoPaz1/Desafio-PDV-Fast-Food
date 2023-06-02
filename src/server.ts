import express from "express"
import "dotenv/config"

import { connect } from "./database/connect"
import cors from "cors"

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

connect()
  .then(() => {
    console.log("Connected to the database")
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
  })
  .catch((error) => console.log("An error occurred while trying to connect to the database", error))

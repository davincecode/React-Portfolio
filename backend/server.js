require("dotenv").config()

const express = require("express")
const morgan = require("morgan")
const app = express()
const PORT = process.env.PORT || 5012
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", function (req, res) {
  res.send("hello, world!")
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🍺`)
})

require("dotenv").config()

const express = require("express")
const morgan = require("morgan")
const app = express()
const PORT = process.env.PORT || 5012
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB... 📀")
  })
  .catch((err) => {
    console.log(err)
  })

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/api/test", function (req, res) {
  res.send("API looks good! 🚀")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} 🍺`)
})

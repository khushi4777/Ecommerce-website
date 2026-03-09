const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const orderRoutes = require("./routes/orderRoutes")

const connectDB = require("./config/db")

dotenv.config()

connectDB()

const app = express()
const productRoutes = require("./routes/productRoutes")

app.use("/api", productRoutes)

app.use(cors())
app.use(express.json())
app.use("/api", orderRoutes)

app.get("/", (req,res)=>{
  res.send("API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
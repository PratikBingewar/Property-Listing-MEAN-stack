const express = require("express")
const app = express()
const listingRoutes = require('./routes/listingRoute')
const mongoose = require("mongoose")

app.use(express.json())

app.use("/api/listings", listingRoutes)


mongoose.connect(
    "mongodb+srv://pratik:pratik123@cluster0.ivvtj.mongodb.net/PropertyListingDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
     () => console.log("connected to MongoDB"))

app.listen(3000, () => console.log('server running on port 3000') )
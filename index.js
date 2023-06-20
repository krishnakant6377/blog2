const express = require("express");
const route = require("./router/router")
const cors = require("cors")
const connectDB = require("./config/database")

const app = express();

app.use(cors({
    origin: "*"
}))

app.use("/api/category", route)

app.get("/", (req, res) => {
    res.send("api is running fine!")
})

app.listen(8000, async () => {
    try {
        await connectDB()
        console.log("Server is running at port 8000")
    }
    catch (err) {
        console.log(`Error in connecting to the server ${err}`)
    }
})
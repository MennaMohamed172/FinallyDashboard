require("dotenv").config()
const express = require("express")
const dbConnection = require("./db/config")

const app = express()

// to parse automatically
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connect to the db
dbConnection(process.env.MONGO_URI)

// routers
const registerRouter = require("./routers/register")
const articalRouter = require("./routers/articels")
const tagRouter = require("./routers/tags")
const PageRouter = require("./routers/page")
const categoryRouter = require("./routers/category")


// var corsOptions = {
//   origin: "http://127.0.0.1:5000"
// };
app.use(articalRouter)
app.use(PageRouter)
app.use(registerRouter)
app.use(tagRouter)
app.use(categoryRouter)
// app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: true }));
// initRoutes(app);

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("Server is up and running on port " + port)
  console.log("All Done Successfully")
})

 


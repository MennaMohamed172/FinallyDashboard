// const mongoose = require("mongoose")

// mongoose.set("strictQuery", false)


// const dbConnection = async (URI) => {
//   try {
//     await mongoose.connect(URI)
//     console.info(`${mongoose.connection.host}`)
//   } catch (err) {
//     console.error("Connection error", err.message)
//   }
// }

// module.exports = dbConnection
// module.exports = {
//   url: "mongodb://127.0.0.1:27017/test",
//   imgBucket: "photos",
// }


const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

// mongoose.connect(process.env.MONGO_URL);
// mongoose.connect(process.env.MONGO_URI, (err) => {
//   if (!err) {
//     console.log("connected to db")
//   } else {
//     console.log("ERROR" + err)
//   }
// })

const dbConnection = async (URI) => {
  try {
    await mongoose.connect(URI)
    console.info(`${mongoose.connection.host}`)
  } catch (err) {
    console.error("Connection error", err.message)
  }
}

module.exports = dbConnection

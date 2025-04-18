const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

//middleware:
app.use(cors()); //allow cors for all origins
app.use(express.json()); // to accept json data

app.get('/', (req,res)=>{
  res.send("API is running!");
});

app.use("/api/user", userRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on PORT ${PORT} successfully!`));

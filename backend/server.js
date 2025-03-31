const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

//allow cors for all origins
app.use(cors());

app.get('/', (req,res)=>{
  res.send("API is running!");
});

app.get('/api/chat', (req,res)=>{
  console.log(chats);
  res.send(chats);
});


app.get('/api/chat/:id', (req,res)=>{
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on PORT ${PORT} successfully!`));

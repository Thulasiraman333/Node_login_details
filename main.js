require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
mongoose.set('strictQuery',false)
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// to connect frontend to backend API
app.use(cors());
// to get data in jsonformat
app.use(express.json());
//route prefix
app.use(routes);

//database connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false });
const db = mongoose.connection;
db.on("error",(error)=> console.log(error));
db.once("open",()=> console.log( "Connected to the database"));

app.listen(PORT,()=>{
  console.log('Server connected')
})
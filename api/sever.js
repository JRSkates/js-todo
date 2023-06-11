const express = require('express');
// dependency 'npm i express' installed. Calls with require to a variable 
const mongoose = require('mongoose');
// dependency 'npm i mongoose' installed. Calls with require to a variable 
const cors = require('cors');
// dependency 'npm i cors' installed.Calls with require to a variable 


const app = express();
// express application created, saved to variable 'app'

app.use(express.json());
// allows us to use json in our api
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/js-mern-todo", {
    useNewUrlPasser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);
// connected to a Mongoose database instance, accessed/started the connection by running 'mongosh'

app.listen(3001, () => console.log("Server started on port 3001"))
const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./configs/server.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("Connected to mongo db")
},err =>{
    console.log("Some err occurred", err.message);
});

//Stich the router 
require("./routes/notification.route")(app);

//Attach the cron 
require("./schedulers/emailScheduler");





app.listen(serverConfig.PORT, ()=>{
    console.log("Server Started on PORT number", serverConfig.PORT);                                                                            
});
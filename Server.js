const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")//middle ware jisse tumara ek dekho ek port react ka 3000 pr chalta hai or iska port tumne 5000 banay hua hai to ye dono ko ek hi port me chalane me help krega 
require("dotenv").config()

const routes = require("./routes/ToDoRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err))

app.use("/api", routes);    
app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
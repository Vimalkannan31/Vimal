import express from "express";
import router from "./routes/portfolio.route.js";
import ConnectDB from "./config/db.js";

const app = express();
const port = 2003;

ConnectDB()

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/info',router)

app.listen(port,() => {
    console.log(`${port} is Running...`)
})
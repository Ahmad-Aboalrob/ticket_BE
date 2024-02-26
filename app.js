import express from 'express';
import routes from './module/user/index.js';
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/test", routes(express));
app.listen(3300,()=>{
    console.log("server is running ...");
}) 
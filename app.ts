import express from "express";
import todoRoutes from "./routes/todo";
import bodyParser from "body-parser";
const PORT = 3000;
const app = express();

app.use(bodyParser.json()); 


app.use(todoRoutes);

app.listen(3500);

// app.listen(PORT, (e)=>{
//     if (e) console.log("Error in server setup")
//     console.log("Server listening on Port", PORT);
// })
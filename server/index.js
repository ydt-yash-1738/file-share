import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import DBConnection from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors(
    {
     origin: ["https://ydt-file-share.vercel.app/"],
     methods: ["POST", "GET"],
     credentials: true
   }
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    res.json("Hello!!");
})
app.use('/', router);
const PORT = process.env.PORT || 8000;

DBConnection();
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));

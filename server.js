import express from "express";
import cors from "cors";
import "dotenv/config";
import PostRouter from "./routes/posts.routes.js"


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/posts", PostRouter);

app.listen(PORT, console.log(`Servidor iniciado en http://localhost:${PORT}`));
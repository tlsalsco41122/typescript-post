import express from "express";
import { createData } from "./controllers/post.controller";

const app = express(); // express 앱 만들기
app.use(express.json()); // body를 JSON 형식으로 해석할 수 있도록 설정

app.post("/create", createData); // "/create"로 들어오면 createData 함수 실행

export default app;

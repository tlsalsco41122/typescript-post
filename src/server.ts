import app from "./app";

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중`);
});

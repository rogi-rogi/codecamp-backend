import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
const port = 3000;

//  1. 회원 목록 조회 API 만들기
app.get("/users", (_, res) => {
  const result = [
    {
      email: "aaa@aaa.com",
      name: "name1",
      phone: "010-1111-1111",
      personal: "111111-1111111",
      prefer: "https://site1.com",
    },
    {
      email: "bbb@aaa.com",
      name: "name2",
      phone: "010-1111-1112",
      personal: "111111-1111112",
      prefer: "https://site2.com",
    },
    {
      email: "ccc@aaa.com",
      name: "name3",
      phone: "010-1111-1113",
      personal: "111111-1111113",
      prefer: "https://site3.com",
    },
    {
      email: "ddd@aaa.com",
      name: "name4",
      phone: "010-1111-1114",
      personal: "111111-1111114",
      prefer: "https://site4.com",
    },
    {
      email: "eee@aaa.com",
      name: "name5",
      phone: "010-1111-1115",
      personal: "111111-1111115",
      prefer: "https://site5.com",
    },
  ];
  res.send(result);
});

//  2. 커피목록 조회 API 만들기
app.get("/starbucks", (_, res) => {
  const result = [
    { name: "커피0", kcal: 0 },
    { name: "커피1", kcal: 1 },
    { name: "커피2", kcal: 2 },
    { name: "커피3", kcal: 3 },
    { name: "커피4", kcal: 4 },
    { name: "커피5", kcal: 5 },
    { name: "커피6", kcal: 6 },
    { name: "커피7", kcal: 7 },
    { name: "커피8", kcal: 8 },
    { name: "커피9", kcal: 9 },
  ];
  res.send(result);
});
//  3. API 명세서 만들기(Swagger)

app.listen(port, () => {
  console.log(`
  ■  localhost:${port}/
  ■  127.0.0.1:${port}/
  ■  swagger : /api-docs`);
});

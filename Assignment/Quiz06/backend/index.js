import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(cors());
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

app.post("/tokens/phone", (req, res) => {
  const myphone = req.body.phone;
  const isValid = checkPhone(myphone);
  if (isValid === false) res.send("올바르지 않는 번호");
  const mytoken = getToken();
  sendTokenToSMS(myphone, mytoken);
  res.send("인증완료!!!");
});

app.post("/users", (req, res) => {
  const { name, phone, likeSite, email } = req.body;
  const isValid = checkEmail(email);
  if (isValid === false) return;
  const myTemplate = getWelcomeTemplate({ name, phone, likeSite });
  sendTemplateToEmail(email, myTemplate);
  res.send("가입완료!!!");
});

app.get("/test", (_, res) => {
  res.send("SUCCESS");
});

app.listen(port, () => {
  console.log(`
  ■  localhost:${port}/
  ■  127.0.0.1:${port}/
  ■  swagger : /api-docs`);
});

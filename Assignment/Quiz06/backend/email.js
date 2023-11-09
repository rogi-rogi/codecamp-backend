import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
import "dotenv/config";

export function checkEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  }
  return true;
}

export function getWelcomeTemplate({ name, phone, likeSite }) {
  const mytemplate = `
          <html>
              <body>
                  <div >
                    <h1>${name}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이름: ${name}</div>
                    <div>전화번호: ${phone}</div>
                    <div>좋아하는 사이트: ${likeSite}</div>
                    <div style="color:red;">가입일: ${getToday()}</div>
                  </div>
              </body>
          </html>
      `;
  return mytemplate;
}

export async function sendTemplateToEmail(myemail, mytemplate) {
  // console.log(myemail + "이메일로 가입환영템플릿 " + mytemplate + "를 전송합니다!!!");
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const result = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: myemail,
    subject: "가입을 환영합니다^^",
    html: mytemplate,
  });
  console.log(result);
}

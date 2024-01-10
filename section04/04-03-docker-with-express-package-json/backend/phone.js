import coolsms from "coolsms-node-sdk";
import "dotenv/config";
const mysms = coolsms.default;

export function checkPhone(myphone) {
  if (myphone.length < 10 || myphone.length > 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  }
  return true;
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export async function sendTokenToSMS(myphone, token) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  // console.log(myphone + "번호로 인증번호 " + token + "를 전송합니다!!!");

  const result = await messageService.sendOne({
    to: myphone,
    from: SMS_SENDER,
    text: `인증번호 : ${token}`,
  });
}

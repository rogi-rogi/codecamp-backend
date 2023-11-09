import { customRegistrationNumber } from "../quiz1/customRegistrationNumber.js";

const getEmailTemplate = (user) => {
  const title = `${user.name}님 가입을 환영합니다.`;
  return `
        <html>
            <body>
                <h1>${title}</h1>
                <hr>
                <div>이메일:${user.email}</div>
                <div>주민번호:${customRegistrationNumber(user.id)}</div>
                <div>휴대폰 번호:${user.phone}</div>
                <div>내가 좋아하는 사이트:${user.favoriteSite}</div>
            </body>
        </html>
    `;
};

const userInfo = {
  name: "코드캡프",
  email: "aaa@aaa.com",
  id: "123456-1234567",
  phone: "01012345678",
  favoriteSite: "github.com",
};
console.log(getEmailTemplate(userInfo));

// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const phone = `010${document.querySelector("#PhoneNumber02").value}${
    document.querySelector("#PhoneNumber03").value
  }`;
  const response = await fetch("http://localhost:3000/tokens/phone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // JSON 형식의 데이터 전송
    },
    body: JSON.stringify(phone),
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.querySelector("#SignupName").value;
  const personal = document.querySelector("#SignupPersonal").value;
  const phone = `010${document.querySelector("#PhoneNumber02").value}${
    document.querySelector("#PhoneNumber03").value
  }`;
  const likeSite = document.querySelector("#SignupPrefer").value;
  const password = document.querySelector("#SignupPwd").value;
  const email = document.querySelector("#SignupEmail").value;
  const user = {
    name,
    personal,
    phone,
    likeSite,
    password,
    email,
  };
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // JSON 형식의 데이터 전송
    },
    body: JSON.stringify(user),
  });
};

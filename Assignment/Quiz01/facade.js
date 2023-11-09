export const checkNumberForm = (number, token = "-") => {
  return number.includes(token);
};

export const splitNumber = (number, token = "-") => {
  return number.split(token);
};

export const checkNubmerCount = (firstNum, lastNum) => {
  return firstNum.length === 6 && lastNum.length === 7;
};

export const getConvertNumber = (firstNum, lastNum) => {
  return `${firstNum}-${lastNum[0]}******`;
};

export const getErrorName = (type = "form") => {
  if (type === "form") return "에러 발생!!! 형식이 올바르지 않습니다!!!";
  else if (type === "count")
    return "에러 발생!!! 개수를 제대로 입력해 주세요!!!";
};

import * as api from "./facade.js";

export const customRegistrationNumber = (number) => {
  if (api.checkNumberForm(number)) {
    const [firstNum, lastNum] = api.splitNumber(number);
    if (api.checkNubmerCount(firstNum, lastNum)) {
      return api.getConvertNumber(firstNum, lastNum);
    }
    return api.getErrorName("count");
  }
  return api.getErrorName();
};

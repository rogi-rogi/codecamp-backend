const getDate = () => {
  const date = new Date();
  const info = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };
  const form = `오늘은 ${info.YYYY}년 ${info.MM}월 ${info.DD}일 ${info.hh}:${info.mm}:${info.ss} 입니다.`;
  return form;
};

console.log(getDate());

//index.js

import axios from "axios";
import cheerio from "cheerio";

const createMessage = async () => {
  // 1. 입력된 메시지에서 http로 시작하는 문장이 있는지 먼저 찾기!(.find() 등의 알고리즘 사용하기)
  const url = "https://www.daum.net";

  // 2. axios.get으로 요청해서 html코드 받아오기 => 스크래핑
  const result = await axios.get(url);
  console.log(result.data);

  // 3. 스크래핑 결과(result)에서 OG(오픈그래프) 코드 골라내서 변수에 저장하기
  const $ = cheerio.load(result.data);
  $("meta").each((i, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property");
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
};

createMessage();

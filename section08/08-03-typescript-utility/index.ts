interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
// 모든 속성을 선택사항으로 바꿔주는 역할을 합니다.
type aaa = Partial<IProfile>;

// 2. Required 타입
// 모든 속성을 필수사항으로 바꿔주는 역할을 합니다. ( Partial Type과 반대 )
type bbb = Required<IProfile>;

// 3. Pick 타입
// 원하는 속성만을 뽑아서 사용하고 싶을 때 사용합니다.
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
// 원하는 속성만 제거하여 사용하고 싶을 때 사용합니다. (Pick Type과 반대)
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
// Utility Type 속성을 다른 Type으로 매핑 시키고자 할 때 사용합니다.
type eee = "철수" | "영희" | "훈이"; // Union 타입
type fff = Record<eee, IProfile>; // Record 타입

// 6. Keyof Type
// 해당 객체 내 key값을 Union 형태로 반환시켜 주는 역할을 합니다.
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby" 형태의 Union 타입
let myprofile: ggg;
myprofile = "name";

// type과 interface의 차이
// interface는 type과 달리 선언병합이 가능합니다.
interface IProfile {
  candy: number;
}

let profile1: IProfile = {
  name: "짱구",
  age: 10,
  school: "다람쥐초등학교",
  candy: 10, // 선언병합으로 추가됨
};

// Partial 타입 적용 → candy 만 사용 가능
let profile2: Partial<IProfile> = {
  candy: 10,
};

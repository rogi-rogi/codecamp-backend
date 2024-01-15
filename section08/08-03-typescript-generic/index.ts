// 1. 문자/숫자/불린 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result1 = getPrimitive("철수", 123, true);

// 2. any 타입 (그냥 자바스크립트랑 같음)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다 됨
  return [arg3, arg2, arg1];
};
const result2 = getAny("철수", 123, true);

// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  // console.log(arg1 + 100); // 사용할 수 없음
  if (typeof arg1 === "number") console.log(arg1 + 100); // unknwon은 사용할 때, 타입을 가정하여 사용해야 함
  return [arg3, arg2, arg1];
};
const result3 = getUnknown("철수", 123, true);

// 4. generic 타입 - 1
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result4 = getGeneric<string, number, boolean>("철수", 123, true);

// 5. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result5 = getGeneric2<string, number, boolean>("철수", 123, true);

// 6. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result6 = getGeneric3<string, number, boolean>("철수", 123, true);

// 7. generic 타입 - 4 (화살표 함수 사용)
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result7 = getGeneric4<string, number, boolean>("철수", 123, true);

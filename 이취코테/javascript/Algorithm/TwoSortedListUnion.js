// 정렬되어 있는 두 리스트의 합집합 알고리즘

//사전에 정렬된 리스트 A와 B 선언
const n = 3;
const m = 4;
const a = [1, 3, 5];
const b = [2, 4, 6, 8];

//리스트 A와 B의 모든 원소를 담을 수 있는 크기의 결과 리스트 초기화
const result = new Array(n + m).fill(0);
let i = 0;
let j = 0;
let k = 0;

//모든 원소가 결과 리스트에 담길 때까지 반복
while (i < n || j < m) {
  //리스트 B의 모든 원소가 처리되었거나, 리스트 A의 원소가 더 작을때
  if (j >= m || (i < n && a[i] <= b[j])) {
    //리스트 A의 원소를 결과 리스트로 옮기기
    result[k] = a[i];
    i += 1;
  }
  //리스트 A의 모든 원소가 처리되었거나, 리스트 B의 원소가 더 작을때
  else {
    //리스트 B의 원소를 결과 리스트로 옮기기
    result[k] = b[j];
    j += 1;
  }
  k += 1;
}

//결과 리스트 출력
// console.group("결과 리스트");
// for (let i of result) {
//   console.log(i);
// }
// console.groupEnd();
console.dir(result);

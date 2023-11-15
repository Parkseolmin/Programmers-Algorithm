// 짝수의 합
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

// 입출력 예
// n	result
// 10	30
// 4	6
// 입출력 예 설명
// 입출력 예 #1

// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
// 입출력 예 #2

// n이 4이므로 2 + 4 = 6을 return 합니다.

function solution(n) {
   return Array(n)
      .fill()
      .map((_, index) => index + 1)
      .filter((value) => value % 2 === 0)
      .reduce((a, c) => a + c, 0);
}

console.log(solution(4));

/**
 * 1. Array(n) : 길이가 'n'인 빈 배열을 생성함
 * 2. fill() : 배열의 모든 요소를 undefined로 채움
 * 3. map((_, index)=>index+1) : 배열의  각 요소를 인덱스 +1로 매핑
 * '_'는 사용하지 않는 매개변수를 나타냄. 따라서 각 요소는 1부터 'n'까지의 숫자로 변환
 * 4. filter((value)=>value % 2 === 0)
 * filter() : 배열에서 조건을 만족하는 요소만을 걸러냄
 * (value) => value % 2 === 0 각 요소가 짝수인지 확인하여 조건을 만족하는 경우만 남김
 * 5. reduce((a, c) => a + c, 0)
 * reduce() : 배열의 모든 요소에 대해 주어진 콜백 함수를 실행하고,
 * 하나의 결과값을 반환함
 * (a, c) => a + c : 현재 요소를 이전까지의 합에 더해가는 콜백 함수
 * 0 : 초기값으로 0을 설정함. 이는 덧셈의 초기값이 0이라는 의미
 */

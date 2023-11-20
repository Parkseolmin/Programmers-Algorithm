/**
 * 가위 바위 보
문제 설명
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

제한사항
0 < rsp의 길이 ≤ 100
rsp와 길이가 같은 문자열을 return 합니다.
rsp는 숫자 0, 2, 5로 이루어져 있습니다.
입출력 예
rsp	result
"2"	"0"
"205"	"052"
입출력 예 설명
입출력 예 #1

"2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.
입출력 예 #2

"205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.
 */

function solution(rsp) {
   let answer = '';
   for (let i of rsp) {
      if (i === '0') {
         answer += '5';
      } else if (i === '2') {
         answer += '0';
      } else if (i === '5') {
         answer += '2';
      }
   }
   return answer;
}

function solution(rsp) {
   let answer = { 0: '5', 2: '0', 5: '2' };
   return [...rsp].map((v) => answer[v]);
}

console.log(solution('2'));

/**
 * map() 메서드의 콜백 함수에는 어떤 타입이든 사용할 수 있음.
 * 콜백 함수의 매개변수로는 현재 요소의 값, 인덱스, 그리고 배열 자체가 제공.
 * 이는 콜백 함수를 작성할 때 자유도 높다는 것을 의미한다.
 *
 * 01. 함수(function) : 콜백 함수 자체가 될 수 있음
 * const numbers = [1, 2, 3];
 * const squaredNumbers = numbers.map(function(num) {
 * return num * num;
 * });
 *
 * 02. 화살표 함수 : 간단한 표현식을 사용하는 경우 화살표 함수를 쓸 수 있음
 * const numbers = [1, 2, 3];
 * const squaredNumbers = numbers.map(num => num * num);
 *
 * 03. 메서드 : 객체의 메서드도 사용할 수 있음.
 * const numbers = [1, 2, 3];
 * const squaredNumbers = numbers.map(num => {
 * return {
 *   original: num,
 *   squared: num * num
 *  };
 * });
 *
 * 04. 객체 : 객체를 콜백 함수로 사용할 수 있음.
 * 예를 들어 map()을 통해 객체의 속성을 가공할 수 있음
 *
 * const personArray = [
 *  { name: 'Alice', age: 30 },
 *  { name: 'Bob', age: 25 },
 *  { name: 'Charlie', age: 35 }
 * ];
 *
 * const names = personArray.map(person => person.name);
 */

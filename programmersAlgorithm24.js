/**
 * 외계행성의 나이
문제 설명
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

제한사항
age는 자연수입니다.
age ≤ 1,000
PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
입출력 예
age	result
23	"cd"
51	"fb"
100	"baa"
입출력 예 설명
입출력 예 #1

age가 23이므로 "cd"를 return합니다.
입출력 예 #2

age가 51이므로 "fb"를 return합니다.
입출력 예 #3

age가 100이므로 "baa"를 return합니다.
 */

function solution(age) {
   let chr = 'abcdefghij';
   return Array.from(age.toString())
      .map((v) => chr[v])
      .join('');
}

console.log(solution(23));

let test = 'abcdefghij';
console.log(test[0]);

/**
 * 1. toString() 메서드를 활용해 numberTYPE의 값인 age를 문자열로 만들어줌
 * 2. Array.from() 메서드를 활용해 배열로 변환
 * 3. 배열 메서드인 map()를 활용해 index값으로 활용 후
 * 4. join("")메서드를 활용해 배열의 모든 요소를 연결
 *
 * **join()
 *   VS
 * **join('')
 *
 * - join()메서드는 배열의 모든 요소를 하나의 문자열로 합침. 이때, 각 요소는 기본적으로 쉼표로 구분됨.
 * 만약 join()에 아무 값도 전달하지 않으면 쉼표가 기본 구분자로 사용된다.
 *
 * - join('')은 빈 문자열('')을 구분자로 사용하여 배열의 모든 요소를 연결함
 * 따라서, 각 요소 사이에 아무런 문자도 추가되지 않음
 *
 */

/**
 * 배열의 유사도
문제 설명
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ s1, s2의 길이 ≤ 100
1 ≤ s1, s2의 원소의 길이 ≤ 10
s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
s1과 s2는 각각 중복된 원소를 갖지 않습니다.
입출력 예
s1	s2	result
["a", "b", "c"]	["com", "b", "d", "p", "c"]	2
["n", "omg"]	["m", "dot"]	0
입출력 예 설명
입출력 예 #1

"b"와 "c"가 같으므로 2를 return합니다.
입출력 예 #2

같은 원소가 없으므로 0을 return합니다.
 */

function solution(s1, s2) {
   return s1.filter((value) => s2.includes(value)).length;
}

/**
 * ⭐ filter()
 * 설명 : 주어진 함수의 반환 값이 true인 요소들로 이루어진 새로운 배열을 생성한다.
 * 예시 :
 * const numbers = [1, 2, 3, 4, 5];
 * const evens = numbers.filter((num) => num % 2 === 0);
 * // evens: [2, 4]
 *
 * ⭐ includes()
 * 설명: 배열이 특정 요소를 포함하고 있는지 여부를 확인한다.
 * 예시 :
 * const number =[1, 2, 3];
 * const includesTwo = number.includes(2);
 * // includesTwo : true
 */

function solution2(s1, s2) {
   return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

const s1 = ['a', 'b', 'c'];
const s2 = ['com', 'b', 'd', 'p', 'c'];
console.log(solution2(s1, s2));
console.log(new Set([...s1, ...s2]));

/**
 * Set 은 중복되지 않는 값을 저장하는 자료구조이다.
 * Set 객체는 원시 값이나 객체 참조와 같은 모든 자료형을 저장할 수 있다.
 *
 * Set의 특징:
 * 1. 중복 요소가 없음: Set은 중복된 값을 허용하지 않는다. 동일한 값이 여러 번 추가되면 한 번만 유지된다.
 * 2. 순서가 있는 반복 가능한 객체: Set은 값이 추가된 순서대로 요소를 유지한다. 따라서 반복문을 사용할 때 순서가 중요한 경우에 유용하다.
 * 3. 객체 형태의 값도 저장 가능: Set은 원시 값 외에도 객체 참조를 포함한 모든 자료형을 저장할 수 있다.
 *
 * Set의 생성과 사용
 * ⭐ new Set()으로 생성하기:
 * const uniqueNumbers = new Set();
 * uniqueNumbers.add(1);
 * uniqueNumbers.add(2);
 * uniqueNumbers.add(3);
 * uniqueNumbers.add(2); // 중복된 값이므로 무시됨
 *
 * console.log(uniqueNumbers); // Set { 1, 2, 3 }
 *
 * ⭐ 배열에서 Set으로 변환하기:
 * const numbers = [1, 2, 3, 2, 1];
 * const uniqueNumbers = new Set(numbers);
 *
 * console.log(uniqueNumbers); // Set { 1, 2, 3}
 *
 * ⭐ has() 메서드로 값의 존재 확인하기:
 * console.log(uniqueNumbers).has(2)); // true
 * console.log(uniqueNumbers).has(4)); // false
 *
 * ⭐ delete() 메서드로 값 제거하기:
 * uniqueNumbers.delete(2)l
 * console.log(uniqueNumbers); // Set { 1, 3}
 *
 * ⭐ size 속성으로 크기 확인하기:
 * console.log(uniqueNumbers.size); // 2
 *
 * ⭐ clear() 메서드로 모든 요소 제거하기:
 * uniqueNumbers.clear();
 * console.log(uniqueNumbers); // Set {}
 *
 * Set은 중복을 허용하지 않고 순서가 있는 값을 다루어야 할 때 유용하게 사용된다.
 */

/**
 * 배열 회전시키기
문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.
입출력 예
numbers	direction	result
[1, 2, 3]	"right"	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]
입출력 예 설명
입출력 예 #1

numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
입출력 예 #2

numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.
 */

function solution(numbers, direction) {
   if (direction === 'right') {
      numbers.unshift(numbers.pop());
   } else if (direction === 'left') {
      numbers.push(numbers.shift());
   }
   return numbers;
}

console.log(solution([1, 2, 3], 'right'));
console.log(solution([1, 2, 3], 'left'));

/**
 * pop()
 * 설명 : 배열에서 마지막 요소를 제거하고 해당 요소를 반환합니다.
 * 예시 :
 * const fruits = ['apple', 'banana', 'orange'];
 * const removedFruit = fruits.pop();
 *
 * console.log(removedFruit); // 'orange'
 * console.log(fruits); // ['apple', 'banaan']
 *
 * -----------------------------------------------------
 * push()
 * 설명 : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
 * 예시 :
 * const newLength = array.push(item1, item2, ...);
 * const fruits = ['apple', 'banana'];
 * const newLength = fruits.push('orange', 'kiwi');
 *
 * console.log(newLength); // 4
 * console.log(fruits); // ['apple', 'banana', 'orange', 'kiwi']
 *
 * -----------------------------------------------------
 *
 * shift()
 * 설명 : 배열에서 첫 번째 요소를 제거하고 해당 요소를 반환합니다.
 * 예시 :
 * const fruits = ['apple', 'banana', 'orange'];
 * const removedFruit = fruits.shift();
 *
 * console.log(removedFruit); // 'apple'
 * console.log(fruits); // ['apple', 'banaan']  ['banana', 'orange']
 *
 * -----------------------------------------------------
 *
 * unshift()
 * 설명 : 배열의 맨 앞에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
 * 예시 :
 * const newLength = array.unshift(item1, item2, ...);
 *
 * const fruits = ['banana', 'orange'];
 * const newLength = fruits.unshift('apple', 'kiwi');
 *
 * console.log(newLength); // 4
 * console.log(fruits); // ['apple', 'kiwi', 'banana', 'orange']
 *
 */

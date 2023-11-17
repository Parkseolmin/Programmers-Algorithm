/**
 * 문자열 뒤집기
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"
입출력 예 설명
입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
 */

function solution(my_string) {
   return my_string.split('').reverse().join('');
}
/**
 * 주어진 문자열을 split('')을 통해 각 문자로 쪼개서 배열로 만든 후,
 * reverse() 메서드로 배열의 순서를 뒤집고,
 * 마지막으로 join('') 메서드를 사용하여 배열을 다시 문자열로 합치는 방식
 */

function solution(my_string) {
   let answer = [...my_string];
   return answer.reverse().join('');
}
/**
 * answer변수 안에 배열로 감싸 spread문법으로 내용을 얕은 복사를 통해 복사 후.
 * reservse() 메서드로 방향을 돌린 뒤
 * join('') 메서드로 배열을 문자열로 바꿈
 */

const my_string = 'jaron';

console.log(solution(my_string));

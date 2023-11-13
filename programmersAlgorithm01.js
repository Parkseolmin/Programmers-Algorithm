/**
 * <몫 구하기>
 * - 문제 설명
 * 정수 num1, num2가 매개변수로 주어질 때,
 * num1을 num2로 나눈 몫을 return 하도록
 * solution 함수를 완성해주세요.
 *
 * - 제한 사항
 * 0 < num1 ≤ 100
 * 0 < num2 ≤ 100
 */

// 1번째 solution
function solution01(num1, num2) {
   var answer = Math.floor(num1 / num2);
   return answer;
}

// 2번째 solution
function solution02(num1, num2) {
   var answer = ~~(num1 / num2);
   return answer;
}

/**
 * ~~ 연산자는 비트 연산자 중 하나로,
 * 주어진 숫자를 32비트 정수로 변환됨.
 * 이 연산자는 주로 소수점 이하를 제거하고 정수 부분만을 얻기 위해 사용.
 */

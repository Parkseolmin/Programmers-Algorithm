/**
 * 피자 나눠 먹기 (1)
문제 설명
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
피자를 나눠먹을 사람의 수 n이 주어질 때, 
모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

제한사항
1 ≤ n ≤ 100
입출력 예
n	result
7	1
1	1
15	3
입출력 예 설명
입출력 예 #1

7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.
입출력 예 #2

1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.
입출력 예 #3

15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.
 */

function solution(n) {
   const SLICE = 7;
   return Math.ceil(n / SLICE);
}

console.log(solution(12));

/**
 * Math 주요 함수 정리
 *
 * Math.abs(x): 숫자 x의 절대값을 반환합니다.
 * Math.abs(-5); // 5
 *
 * Math.ceil(x): 숫자 x의 올림값을 반환합니다.
 * Math.ceil(4.25); // 5
 *
 * Math.floor(x): 숫자 x의 내림값을 반환합니다.
 * Math.floor(4.75); // 4
 *
 * Math.round(x): 숫자 x를 반올림하여 가장 가까운 정수를 반환합니다.
 * Math.round(4.5); // 5
 *
 * Math.max(x, y, ...): 주어진 숫자 중 가장 큰 값을 반환합니다.
 * Math.max(2, 7, 1, 5); // 7
 *
 * Math.min(x, y, ...): 주어진 숫자 중 가장 작은 값을 반환합니다.
 * Math.min(2, 7, 1, 4); // 1
 *
 * Math.random(): 0 이상 1 미만의 난수를 반환합니다.
 * Math.random(); // 0.12345...
 *
 * Math.pow(x, y): x의 y 제곱을 반환합니다.
 * Math.pow(2, 3); // 8
 */
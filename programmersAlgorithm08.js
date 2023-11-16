/**
 * 머쓱이보다 키 큰 사람
문제 설명
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ height ≤ 200
1 ≤ array의 원소 ≤ 200
입출력 예
array	height	result
[149, 180, 192, 170]	167	3
[180, 120, 140]	190	0
입출력 예 설명
입출력 예 #1

149, 180, 192, 170 중 머쓱이보다 키가 큰 사람은 180, 192, 170으로 세 명입니다.
입출력 예 #2

180, 120, 140 중 190보다 큰 수는 없으므로 0명입니다.
 */

function solution(array, height) {
   return array.filter((v) => v > height).length;
}

const arrayEx = [149, 180, 192, 170];
console.log(solution(arrayEx, 167));

/**
 * filter() : 배열에서 주어진 조건을 만족하는 요소만을 걸러냄
 * (v)=> v > height : 배열의 각 요소가 'height' 보다 큰지 여부를 확인하여, 큰 경우만 남김
 * .lenght : 걸러진 배열의 길이, 즉 조건을 만족하는 요소의 개수를 반환함
 */

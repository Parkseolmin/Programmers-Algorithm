/**
 * k의 개수
문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ i < j ≤ 100,000
0 ≤ k ≤ 9
입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0
입출력 예 설명
입출력 예 #1

본문과 동일합니다.
입출력 예 #2

10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.
입출력 예 #3

3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.
 */

function solution(i, j, k) {
   let s = '';
   for (i; i <= j; i++) {
      s += i;
   }
   return s.split(k).length - 1;
}

console.log(solution(1, 10, 1));

/**
 * split 메서드
 * 자바스크립트 문자열 객체에서 사용되는 메서드로,
 * 지정된 구분자를 기준으로 문자열을 분리하여 배열로 반환함
 */
// 예제 1: 공백을 기준으로 문자열 분리
var sentence = '안녕하세요, 반갑습니다.';
var words = sentence.split();
console.log(words);
// 출력: ['안녕하세요,', '반갑습니다.']

// 예제 2: '-'를 기준으로 문자열 분리
var date = '2023-12-15';
var parts = date.split('-');
console.log(parts);
// 출력: ['2023', '12', '15']

// 예제 3: 공백을 기준으로 최대 2번까지만 문자열 분리
var sentence = '이 문장은 예제 문장입니다.';
var words = sentence.split(' ', 2);
console.log(words);
// 출력: ['이', '문장은', '예제 문장입니다.']

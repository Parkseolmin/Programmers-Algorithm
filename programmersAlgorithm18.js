/**
 * 중앙값 구하기
문제 설명
중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

제한사항
array의 길이는 홀수입니다.
0 < array의 길이 < 100
-1,000 < array의 원소 < 1,000
입출력 예
array	result
[1, 2, 7, 10, 11]	7
[9, -1, 0]	0
입출력 예 설명
입출력 예 #1

본문과 동일합니다.
입출력 예 #2

9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.
 */

function solution(array) {
   return array[Math.floor(array.sort((a, b) => a - b).length / 2)];
}

function solution2(array) {
   // 배열을 오름차순으로 정렬
   array.sort((a, b) => a - b);

   // 중앙값 반환
   const middleIndex = Math.floor(array.length / 2);
   return array[middleIndex];
}

function sortPractice(array) {
   return array.sort();
}

function sortPractice2(array) {
   return array.sort((a, b) => a.localeCompare(b));
}
/**
 * sort() 메서드는 배열의 요소를 적절한 위치에 정렬하는데 사용된다.
 * 정렬은 기본적으로 문자열로 처리되므로 숫자를 정렬할 때는 정확한 순서를 얻기 위해 비교 함수를 제공해야 한다.
 *
 * <숫자 비교>
 * 오름차순 정렬
 * sort((a, b) => a - b)
 * 두 수를 비교해서 양수일 경우 a가 b보다 뒤로 이동
 * 두 수를 비교해서 음수일 경우 a와 b 위치 그대로
 *
 * 내림차순 정렬
 * sort((a, b)=> b-a)
 *
 * <문자 비교>
 * 문자열을 정렬할 때에는 sort() 메서드를 사용하면 간단하게 정렬할 수 있다.
 * 기본적으로 sort()는 문자열로 간주되어 사전식 순서대로 정렬된다.
 * 예를 들어, 알파벳 순서로 문자열을 정렬하려면 추가적인 비교 함수를 제공할 필요가 없다.
 *
 * 이는 영문 알파벳과 숫자에 대해서는 잘 동작하지만,
 * 한글 문자열과 같이 유니코드가 적용된 문자에 대해서는 원하는 대로 정렬되지 않을 수 있다.
 * 한글의 경우에는 유니코드 값에 따라 정렬이 이루어진다.
 * 만약 기본적인 사전식 순서가 아닌 사용자가 원하는 정렬 순서가 필요하다면,
 * localeCompare() 메서드를 사용하여 로케일을 기반으로 한 정렬을 수행할 수 있다.
 *
 * 예)
 * const koreanWords = ['사과', '바나나', '오렌지', '포도'];
 *
 * koreanWords.sort((a, b) => a.localeCompare(b));
 *
 * console.log(koreanWords);// ['바나나', '사과', '오렌지', '포도']
 */

console.log(solution2([1, 2, 7, 10, 11]));
console.log(solution2([9, -1, 0]));
console.log(sortPractice(['사과', '개', '바나나', '오렌지']));
console.log(sortPractice2(['사과', '개', '바나나', '오렌지']));

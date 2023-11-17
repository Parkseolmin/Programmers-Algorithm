/**
 * 특정 문자 제거하기
문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
letter은 길이가 1인 영문자입니다.
my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
대문자와 소문자를 구분합니다.
입출력 예
my_string	letter	result
"abcdef"	"f"	"abcde"
"BCBdbe"	"B"	"Cdbe"
입출력 예 설명
입출력 예 #1

"abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
입출력 예 #2

"BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
 */

function solution(my_string, letter) {
   let reg = new RegExp(letter, 'g');
   return my_string.replace(reg, '');
}

function solution(my_string, letter) {
   const answer = my_string.split(letter).join('');
   return answer;
}

function solution(my_string, letter) {
   return my_string.replaceAll(letter, '');
}

function solution(my_string, letter) {
   return Array.from(my_string)
      .filter((alphabet) => alphabet !== letter)
      .join('');
}

let my_string = 'abcdef';
console.log(solution(my_string, 'f'));

/**
 * 01. 정규표현식 활용

- `new RegExp(letter, 'g')`: `RegExp`생성자를 사용하여 정규식 객체를 만듭니다. 여기서 `letter`는 찾을 문자열을 나타내고, `'g'` 플래그는 전역 검색을 의미합니다. 이는 문자열 내에서 모든 `letter`와 일치하는 부분을 찾을 수 있도록 합니다.

- `my_string.replace(reg, ' ')`: `replace()` 메서드를 사용하여 정규식과 일치하는 부분을 빈 문자열(' ')로 치환합니다. 즉, `letter`에 해당하는 모든 부분을 제거한 문자열을 반환합니다.



02. split() 메서드와 join() 메서드 활용

- `split()` 메서드는 문자열을 특정 구분자를 기준으로 여러 부분으로 나누어 배열로 반환하는 메서드로, 구분자가 여러 글자로 이루어진 경우, 해당 글자 그대로를 기준으로 나눕니다. 

- ' abcdef '.split(' f ') 인 경우 ' f '를 기준으로 ' f '가 있는 쪽과 없는 쪽으로 나눕니다. 결과적으로 ' f ' 가 나타나는 부분에서 문자열이 분리되어 배열의 요소로 들어가게 됩니다. 

- 예를 들어, `' abcdef '.split(' f ')` 를 실행하면 배열 `[' abc ', ' ' ]`가 생성됩니다. 이 배열은 ' f ' 를 기준으로 문자열이 나뉘어진 결과를 보여줍니다. 첫 번째 요소는 ' f ' 이전의 문자열인 ' abc ' 이고, 두 번째 요소는 ' f ' 이후의 문자열인 ' '(빈 문자열)입니다.



03. replaceAll() 메서드 활용

- `replaceAll` 메서드는 문자열에서 모든 발견된 특정 부분을 다른 문자열로 일괄 교체합니다. 



04. Array.from() 메서드는 문자열 등 유사 배열 객체나 반복 가능한 객체를 배열로 변환하는 메서드입니다.

- 문자열을 배열로 변환 후 filter() 메서드를 통해 원하는 값만 필터링하여 반환합니다.
 */

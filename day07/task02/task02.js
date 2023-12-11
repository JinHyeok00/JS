const hangle = '영일이삼사오육칠팔구점';
// 한글로 된 숫자를 나열한다
const DOT = 10;
// hangle[10]에 접근하기 쉽게 .을 나타낼 DOT을 const 10으로 설정한다

let count = 0;
function send() {
  count = 0;
  let result = '';
  // 결과값과 count를 초기화 해준다 (이전값이 남아서 오류가 발생할 일을 방지한다)
  const number = document.getElementsByName('input')[0].value.split('');
  // input에서 받아올 숫자를 split()을 통해 배열로 변환한다.
  const output = document.querySelector('#output');
  //  output.innerHTML을 쓸 준비를 한다
  for (let i = 0; i < number.length; i++) {
    //배열의 길이만큼 반복을 시행
    if (number[i] == '.') {
      //number[i]번째 방에 .이 있다면
      number[i] = DOT; //아까 설정한 DOT으로 바꿔준다
      count++; //count로 if문안에 몇번 들어왔나 계산한다.
    }
    if (count >= 2) {
      //만약 위 if문에 두번이상 들어오면 소숫점이 두번있었다는것
      result = '소숫점이 두개 일 수 없습니다.'; //직접 output.innerHTML로 오류 메세지를 출력한다
      break; //for문을 종료
    }
    if (hangle[number[i]] == undefined) {
      //만약 number[i]에 숫자가 아닌 다른 값이 들어온다면 hangle[number[i]]가 undefined값으로 나온다
      result = '숫자만 입력해주세요.'; //그럴때 오류 메세지를 출력하고
      break; // for문을 종료
    }
    result += hangle[number[i]]; //정상적인 경우 result에 hangle[number[i]을 더해준다
  }
  output.innerHTML = result; //위에 for문이 모두 반복되면 output.innerHTML에 result값을 반환한다.
}

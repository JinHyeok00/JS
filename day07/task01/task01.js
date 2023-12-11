const arPeople = ['아동', '청소년', '성인'];    //비교군
const arTr = document.getElementsByClassName('box');
const arTd = document.getElementsByClassName('star');

function send() {
  /* 이전 변경 사항 초기화 */
  let flag = false;
  for (let i = 0; i < arPeople.length; i++) {
    arTr[i].style.backgroundColor = 'white';
    arTd[i].innerHTML = arPeople[i];
  }

  /*people에  입력 값 넣기*/
  const people = document.getElementsByName('people')[0].value;

  for (let i = 0; i < arPeople.length; i++) {
    if (people == arPeople[i]) {
      //만약 입력값이 arPeople중의 값과 같은게 있다면
      //arPeople의 인덱스 값을 가져와서 해당하는 Tr태그와 Td태그 변경
      arTr[i].style.backgroundColor = 'red';
      arTd[i].innerHTML = '★' + arPeople[i];
      flag = true; //한번이라도 if문 안에 들어왔다면 flag를 true로 변경
      break; //찾으면 for문을 탈출한다
    }
  }
  if (!flag) {
    // flag가 false라면 입력값이 잘못입력된 값이기 때문에
    alert('다시 입력해주세요'); //경고창 출력
  }
}

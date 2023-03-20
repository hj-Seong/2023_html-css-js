/* 투두리스트 만들기 */
// 추가) 할일 값을 받아와서 ul의 li로 출력하기
// 완료) 할일을 완료(체크)를 했을때, 완료표시
// 삭제) 할일을 삭제

// 할일 입력창에 값을 입력하고 sumbit을 했을때(이벤트)-form
// 작성한 할일을 ul에 li로 추가(실행할 함수)
const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

// 투두를 추가하는 함수
function todoAdd(e) {
    e.preventDefault();
    
    // input태그의 값을 가져와서 ul의 list로 추가하기
    // todoForm.firstElementChild 는 input type=text
    const todoValue = todoForm.firstElementChild.value;

    // li태그 생성 ul찾아서 추가
    const li = document.createElement("li");
    li.innerHTML = todoValue;

    //document.querySelector("#todolist"); ul
    document.querySelector("#todolist").appendChild(li);

}

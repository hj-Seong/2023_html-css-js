/* 투두리스트 만들기 */
// 추가) 할일 값을 받아와서 ul의 li로 출력하기
// 완료) 할일을 완료(체크)를 했을때, 완료표시
// 삭제) 할일을 삭제

// 할일 입력창에 값을 입력하고 sumbit을 했을때(이벤트)-form
// 작성한 할일을 ul에 li로 추가(실행할 함수)
const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

// 할일과 완료한 할일 DOM
const countPrint = document.querySelector("#count");

// 전역으로 관리할 전체 할일개수와 체크한 개수
let allCount = 0;
let checkedCount = 0;


// 투두를 추가하는 함수
function todoAdd(e) {
    e.preventDefault();
    
    // input태그의 값을 가져와서 ul의 list로 추가하기
    // todoForm.firstElementChild 는 input type=text
    const todoValue = todoForm.firstElementChild.value;

    // li태그 생성 ul찾아서 추가
    const li = document.createElement("li");
    
    // li태그에 추가할 내용 : 체크박스, 텍스트노드, 버튼
    // 태그 생성
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X";
    // 시간을 추가하기위한 span태그
    const time = document.createElement("span");
    // 다른 자바스크립트에서 작성한 함수를 가져와 쓸수있다.
    time.innerHTML = getClock();

    // li 태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);// 시간 추가
    li.appendChild(button);

    //document.querySelector("#todolist"); ul
    document.querySelector("#todolist").appendChild(li);

    // input의 value값을 "" 으로 바꿈
    todoForm.firstElementChild.value ="";
    
    // 할일이 추가되었다면 갯수를 세어서 출력 getAllCount()
    countPrint.innerHTML = `할일 : ${getAllCount()} / 완료한 할일: ${getCheckedCount()}`;
    
    // 전역변수에 접근해서 Allcount 개수 증가
    allCount++;
    console.log("전체 개수",allCount);

    // check에 클릭 이벤트 추가
    check.addEventListener("click", todoCheck);
    // button에 클릭 이벤트 추가
    button.addEventListener("click", todoDelete);
}

// check에 들어가는 todoCheck 함수 작성
function todoCheck(e) {
    // 이벤트 객체를 통해서 
    // 이벤트가 실행된 태그 찾아서 값 사용
    const check = e.target;
    const li = check.parentNode;
    if(check.checked) {
        li.style.color = "lightgray";
        // 체크했을때 1 추가
        checkedCount++;
    }else {
        check.parentNode.style.color = "";
        // 체크해제했을때 1 감소
        checkedCount--;
    }
    // 할일이 체크되었다면 갯수를 세어서 출력 getAllCount()
    countPrint.innerHTML = `할일 : ${getAllCount()} / 완료한 할일: ${getCheckedCount()} `;
    // 체크한 값 출력
    console.log("체크한 수",checkedCount);
}

// 버튼에 클릭 이벤트를 추가해서
// 선택된 li가 삭제되는 함수 작성 remove()
function todoDelete (e) {
    const button = e.target;
    const li = button.parentNode;
    // 체크가 되어있는지 확인 (체크가 되어있다면 1 감소)
    const checkbox = li.firstElementChild;
    if(checkbox.checked) {
        checkedCount--;
    }

    li.remove();
    // 할일이 삭제되었다면 갯수를 세어서 출력 getAllCount()
    countPrint.innerHTML = `할일 : ${getAllCount()} / 완료한 할일: ${getCheckedCount()} `;

    // 전체 할일의 감소를 위해 allCount의 값을 1씩 감소
    allCount--;
    console.log("전체 개수",allCount);
    console.log("체크한 수",checkedCount);
}

/* Dom을 직접 가져와서 갯수를 확인 */
// 추가, 삭제, 체크할때마다 갯수를 확인
// 함수 만들어서 확인

// 전체 갯수 확인
function getAllCount() {
    const todolist = document.querySelector("#todolist");
    // 1) return을 통해서 값을 전달
    // 2) DOM을 가져와서 출력
    console.log(todolist.childElementCount);
    return todolist.childElementCount;
}

// 체크된 DOM 갯수 가져오기
function getCheckedCount(){
    const checkedlist = document.querySelectorAll("#todolist li input[type='checkbox']:checked");
    console.log(checkedlist.length);
    return checkedlist.length;
}
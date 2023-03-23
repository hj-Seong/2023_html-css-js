/** 슬라이더 버튼을 눌렀을때 각 위치의 슬라이더 출력*/
const slider2Buttons = document.querySelectorAll("#slider2-buttons a");

// 슬라이더 아이템
const slider2Items = document.querySelectorAll(".slider2-item");

// 각각의 버튼을 눌렀을때 그 위치에 있는 슬라이더로 이동
// 각각의 버튼 : slider2Buttons[0], slider2Buttons[1], slider2Buttons[2]
// 각각의 아이템 : slider2Items[0], slider2Items[1], slider2Items[2]
// 화면이 보이는 위치 : left = 0 , left = -100%, left = -200%
// 규칙 : 버튼[0]을 누르면 left = 0 이동
//        버튼[1]을 누르면 left = -100 이동
// >> 버튼[i]를 누르면  left = i*-100

// 버튼[1] 가져와서 확인 후 아래 내용 반복해서 사용
// 버튼에 이벤트리스너 추가
for(let i = 0; i <slider2Buttons.length; i++) {
    slider2Buttons[i].addEventListener("click", function(e) {
        e.preventDefault();
        // forEach는 배열에 있는 각각의 값을 꺼내서
        // 콜백함수를 통해 쓸수 있다
        // 배열.forEach(function(배열의값, 인덱스){});
        slider2Items.forEach(function(item, index){
            item.style.left = `${i*-100}%`
        });
    })
}

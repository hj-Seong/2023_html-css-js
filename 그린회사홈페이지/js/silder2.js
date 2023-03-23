/** 슬라이더 버튼을 눌렀을때 각 위치의 슬라이더 출력*/
const slider2Buttons = document.querySelectorAll("#slider2-buttons")

// 슬라이더 아이템
const slider2Items = document.querySelectorAll(".slider2-item");

// 각각의 버튼을 눌렀을때 그 위치에 있는 슬라이더로 이동
// 각각의 버튼 : slider2Buttons[0], slider2Buttons[1], slider2Buttons[2]
// 각각의 아이템 : slider2Items[0], slider2Items[1], slider2Items[2]
// 화면이 보이는 위치 : left = 0 , left = -100%, left = -200%
// 규칙 : 버튼[0]을 누르면 left = 0 이동
//        버튼[1]을 누르면 left = -100 이동
// >> 버튼[i]를 누르면  left = i*-100



// 다음 버튼을 눌렀을때 left값이 이동
nextButton.addEventListener("click",function(){
    // 현재 슬라이더가 전체갯수보다 작을때 실행
    if(currSlide<maxSlide) {
        currSlide++;  // 2> -100%, 3>-200%, 4>-300% >> 화면의넓이 곱해서이동
        //sliderItems를 통해서 모든 left값 이동
        for ( let i = 0; i<sliderItems.length; i++ ) {
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`
        }
    }
})

// 이전 버튼
prevButton.addEventListener("click",function(){
    // 현재 슬라이더가 1보다 클때 실행
    if(currSlide>1) {
        currSlide--;  // 2> -100%, 3>-200%, 4>-300% >> 화면의넓이 곱해서이동
        //sliderItems를 통해서 모든 left값 이동
        for ( let i = 0; i<sliderItems.length; i++ ) {
            sliderItems[i].style.left = `${100+(-100)*currSlide}%`
        }
    }
})


//배지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to_top');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);

    if (window.scrollY > 500) {
        //배지숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            display: 'none',
            opacity: 0
        });
        //버튼보이기
        gsap.to(toTopEl, .2, {
            x: 0
        })
    } else {
        //배지보이기
        gsap.to(badgeEl, .6, {
            display: 'block',
            opacity: 1
        })
        //버튼숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300));

//-.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
})

//배너 
const fadeEls = document.querySelectorAll('.visual .fade_in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
});

//공지사항 슬라이드
//new Swiper (선택자, 옵션)
new Swiper('.notice_line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

//프로모션 슬라이드
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,//한번에 보여줄 슬라이드 개수
    spaceBtween: 10, // 슬라이드 사이 여백
    centeredSlides: true,//1번 슬라이드가 가운데
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
});

//푸터 슬라이드
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

//프로모션 접엇다 펴기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle_promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        //숨김 처리 !
        promotionEl.classList.add('hide');

    } else {
        //보임 처리 !
        promotionEl.classList.remove('hide');
    }
});


//둥둥떠있는 효과

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
    //gsap.to(요소,시간,옵션);
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작시간 
        { //옵션
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        });
}
floatingObj('.floating1', 1, 15);
floatingObj('.floating2', .5, 15);
floatingObj('.floating3', 1.1, 20);

//scrollmagic
const spyEls = document.querySelectorAll('section.scroll_spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 정함
            triggerHook: .8

        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

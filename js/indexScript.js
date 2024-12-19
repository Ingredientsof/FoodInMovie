
//랜덤하게 돌림판
$(document).ready(function() {
    const imgBoxes = $('.bgImgSize');
    const positions = []; // 위치를 저장할 배열

    imgBoxes.each(function() {
        let randomX, randomY, randomDegree;
        let overlapping;

        // 위치 최대한 안겹치게
        do {
            overlapping = false;
            randomX = Math.random() * 80;
            randomY = Math.random() * 80;
            randomDegree = Math.random() * 360;

            const currentPos = { x: randomX, y: randomY };

            // 기존 위치와 겹치는지 검사
            for (const pos of positions) {
                const distance = Math.sqrt(Math.pow(currentPos.x - pos.x, 2) + Math.pow(currentPos.y - pos.y, 2));
                if (distance < 20) { // 최소 거리
                    overlapping = true;
                    break;
                }
            }
        } while (overlapping);

        positions.push({ x: randomX, y: randomY }); // 새로운 위치 추가

        $(this).css({
            left: `${randomX}vw`, // 랜덤 X 위치
            top: `${randomY}vh`,  // 랜덤 Y 위치
            transform: `rotate(${randomDegree}deg)` // 랜덤 각도
        });

        // 마우스 지나가면 슝 돌아가게하는거
        $(this).on('mouseenter', function() {
            const currentRotation = randomDegree; // 현재 돌아간 각도
            const newRotation = currentRotation + 20; // 20도 회전 넣기기

            // 마우스 돌아갔을때 회전
            $(this).css({
                transition: 'transform 0.5s',
                transform: `rotate(${newRotation}deg)`
            });

            // 다시 돌아오는거
            setTimeout(() => {
                $(this).css({
                    transition: 'transform 1s',
                    transform: `rotate(${currentRotation}deg)`
                });
            }, 500); // 0.5초 후에 작동하게...
        });
    });
});

// 누르면 움직이는거
$(document).ready(function() {
    let isMoved = false; // 상태 확인

    function checkViewport() {
        return $(window).width() > 915; // 뷰포트가 915px보다 큰지 확인
    }

    function getAnimationValue() {
        return checkViewport() ? '8vw' : '28vw'; // 뷰포트에 따라 애니메이션 값 설정
    }

    function toggleOverlayImages() {
        if (checkViewport()) {
            $('#overlayImage').fadeIn(300); // overlayImage 보이기
            $('#overlayImage2').fadeIn(300);
            $('#overlayImage3').fadeIn(300);
        }
    }

    function hideOverlayImages() {
        if (checkViewport()) {
            $('#overlayImage').fadeOut(300); // overlayImage 숨기기
            $('#overlayImage2').fadeOut(300);
            $('#overlayImage3').fadeOut(300);
        }
    }

    // SecondBox 관련 함수
    function toggleOverlayImages2() {
        if (checkViewport()) {
            $('#overlayImage4').fadeIn(300); // overlayImage 보이기
            $('#overlayImage5').fadeIn(300);
            $('#overlayImage6').fadeIn(300);
        }
    }

    function hideOverlayImages2() {
        if (checkViewport()) {
            $('#overlayImage4').fadeOut(300); // overlayImage 숨기기
            $('#overlayImage5').fadeOut(300);
            $('#overlayImage6').fadeOut(300);
        }
    }

    $('.wangTxtBox').on('click', function() {
        const animationValue = getAnimationValue(); // 애니메이션 값 가져오기
        if (!isMoved) {
            $('.colorBox').animate({ top: `+=${animationValue}` }, 300);
            $('.wangBox').animate({ top: `-=${animationValue}` }, 300);
            toggleOverlayImages();
            $('#darkOverlay').fadeIn(300);  // 어두운 색 덮기
        } else {
            $('.colorBox').animate({ top: `-=${animationValue}` }, 300);
            $('.wangBox').animate({ top: `+=${animationValue}` }, 300);
            hideOverlayImages();
            $('#darkOverlay').fadeOut(300);  // 어두운 색 덮기 없애기
        }
        isMoved = !isMoved; // 상태 반전
    });

    $('.colorBox').on('click', function() {
        const animationValue = getAnimationValue(); // 애니메이션 값 가져오기
        if (!isMoved) {
            $('.colorBox').animate({ top: `+=${animationValue}` }, 300);
            $('.wangBox').animate({ top: `-=${animationValue}` }, 300);
            toggleOverlayImages();
            $('#darkOverlay').fadeIn(300);  // 어두운 색 덮기
        } else {
            $('.colorBox').animate({ top: `-=${animationValue}` }, 300);
            $('.wangBox').animate({ top: `+=${animationValue}` }, 300);
            hideOverlayImages();
            $('#darkOverlay').fadeOut(300);  // 어두운 색 덮기 없애기
        }
        isMoved = !isMoved; // 상태 반전
    });

    // SecondBox
    $('.wangTxtBox2').on('click', function() {
        const animationValue = getAnimationValue(); // 애니메이션 값 가져오기
        if (!isMoved) {
            $('.colorBox2').animate({ top: `+=${animationValue}` }, 300);
            $('.wangBox2').animate({ top: `-=${animationValue}` }, 300);
            toggleOverlayImages2();
            $('#darkOverlay').fadeIn(300);  // 어두운 색 덮기
        } else {
            $('.colorBox2').animate({ top: `-=${animationValue}` }, 300);
            $('.wangBox2').animate({ top: `+=${animationValue}` }, 300);
            hideOverlayImages2();
            $('#darkOverlay').fadeOut(300);  // 어두운 색 덮기 없애기
        }
        isMoved = !isMoved; // 상태 반전
    });

    $('.colorBox2').on('click', function() {
        const animationValue = getAnimationValue(); // 애니메이션 값 가져오기
        if (!isMoved) {
            $('.colorBox2').animate({ top: `+=${animationValue}` }, 300);
            $('.wangBox2').animate({ top: `-=${animationValue}` }, 300);
            toggleOverlayImages2();
            $('#darkOverlay').fadeIn(300);  // 어두운 색 덮기
        } else {
            $('.colorBox2').animate({ top: `-=${animationValue}` }, 300);
            $('.wangBox2').animate({ top: `+=${animationValue}` }, 300);
            hideOverlayImages2();
            $('#darkOverlay').fadeOut(300);  // 어두운 색 덮기 없애기
        }
        isMoved = !isMoved; // 상태 반전
    });
});

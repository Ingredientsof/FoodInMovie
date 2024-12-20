$(document).ready(function() {
    const imgBoxes = $('.bgImgSize');

    imgBoxes.each(function() {
        let randomX = Math.random() * 80; // 랜덤 X 위치
        let randomY = Math.random() * 80; // 랜덤 Y 위치
        let randomDegree = Math.random() * 360; // 랜덤 각도

        $(this).css({
            left: `${randomX}vw`,
            top: `${randomY}vh`,
            transform: `rotate(${randomDegree}deg)`
        });

        // 마우스 지나가면 슝 돌아가게하는거
        $(this).on('mouseenter', function() {
            const currentRotation = randomDegree; // 현재 돌아간 각도
            const newRotation = currentRotation + 20; // 20도 회전 넣기

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

//다시... 첨부터 다시...
// 이게 1번
$(document).ready(function() {
    let isMoved = false; // 상태 확인하고

    // 뷰포트 크기 체크 함수
    function checkViewport() {
        if ($(window).width() <= 915) {
            $('#overlayImage1, #overlayImage2, #overlayImage3, #overlayImage4, #overlayImage5').css('display', 'none');
        } else {
            if (isMoved) {
                $('#overlayImage1, #overlayImage2, #overlayImage3, #overlayImage4, #overlayImage5').css('display', 'block');
            }
        }
    }

    // 초기 뷰포트 체크
    checkViewport();

    $(window).resize(function() {
        checkViewport(); // 리사이즈 시 뷰포트 체크
    });

    $('.colorBox').click(function() {
        // 뷰포트 크기가 915 이하일 경우 오버레이를 표시하지 않음
        if ($(window).width() <= 915) {
            $(this).animate({ top: isMoved ? '-=30vw' : '+=30vw' }, 300); // colorBox 이동
            $(this).siblings('.wangBox').animate({ top: isMoved ? '+=20vw' : '-=20vw' }, 300); // wangBox 이동
        } else {
            // 뷰포트가 915보다 클 때는 오버레이 표시
            if (!isMoved) {
                $(this).animate({ top: '+=8vw' }, 300); // colorBox를 아래
                $(this).siblings('.wangBox').animate({ top: '-=8vw' }, 300); // wangBox를 위
                
                // 이미지 나타나기
                $('#overlayImage1, #overlayImage2, #overlayImage3, #overlayImage4, #overlayImage5').each(function(index) {
                    $(this).css('display', 'block').css('transform', 'translateY(-8vh)'); // 위로 이동
                });

                $('#darkOverlay').css('display', 'block').css('opacity', '0').animate({ opacity: 0.7 }, 300);
            } else {
                $(this).animate({ top: '-=8vw' }, 300); // 원래 위치로
                $(this).siblings('.wangBox').animate({ top: '+=8vw' }, 300); // 원래 위치로
                
                // 이미지 숨기기
                $('#overlayImage1, #overlayImage2, #overlayImage3, #overlayImage4, #overlayImage5').each(function(index) {
                    $(this).css('transform', 'translateY(20vh)'); // 아래로 이동
                    setTimeout(() => { $(this).css('display', 'none'); }, 300); // 애니메이션 후 숨기기
                });

                $('#darkOverlay').css('display', 'none').css('opacity', '0');
            }
        }

        isMoved = !isMoved; // 상태 변경
    });
});



//2번
$(document).ready(function() {
    let isMoved = false; // 상태 확인하고

    // 뷰포트 크기 체크 함수
    function checkViewport() {
        if ($(window).width() <= 915) {
            $('#overlayImage6, #overlayImage7').css('display', 'none');
        } else {
            if (isMoved) {
                $('#overlayImage6, #overlayImage7').css('display', 'block');
            }
        }
    }

    // 초기 뷰포트 체크
    checkViewport();

    $(window).resize(function() {
        checkViewport(); // 리사이즈 시 뷰포트 체크
    });

    $('.colorBox2').click(function() {
        // 뷰포트 크기가 915 이하일 경우 오버레이를 표시하지 않음
        if ($(window).width() <= 915) {
            $(this).animate({ top: isMoved ? '-=30vw' : '+=30vw' }, 300); // colorBox 이동
            $(this).siblings('.wangBox2').animate({ top: isMoved ? '+=20vw' : '-=20vw' }, 300); // wangBox 이동
        } else {
            // 뷰포트가 915보다 클 때는 오버레이 표시
            if (!isMoved) {
                $(this).animate({ top: '+=8vw' }, 300); // colorBox를 아래
                $(this).siblings('.wangBox2').animate({ top: '-=8vw' }, 300); // wangBox를 위
                
                // 이미지 나타나기
                $('#overlayImage6, #overlayImage7').each(function(index) {
                    $(this).css('display', 'block').css('transform', 'translateY(-8vh)'); // 위로 이동
                });

                $('#darkOverlay').css('display', 'block').css('opacity', '0').animate({ opacity: 0.7 }, 300);
            } else {
                $(this).animate({ top: '-=8vw' }, 300); // 원래 위치로
                $(this).siblings('.wangBox2').animate({ top: '+=8vw' }, 300); // 원래 위치로
                
                // 이미지 숨기기
                $('#overlayImage6, #overlayImage7').each(function(index) {
                    $(this).css('transform', 'translateY(20vh)'); // 아래로 이동
                    setTimeout(() => { $(this).css('display', 'none'); }, 300); // 애니메이션 후 숨기기
                });

                $('#darkOverlay').css('display', 'none').css('opacity', '0');
            }
        }

        isMoved = !isMoved; // 상태 변경
    });
});

//3번
$(document).ready(function() {
    let isMoved = false; // 상태 확인하고

    // 뷰포트 크기 체크 함수
    function checkViewport() {
        if ($(window).width() <= 915) {
            $('#overlayImage8, #overlayImage9, #overlayImage10, #overlayImage11').css('display', 'none');
        } else {
            if (isMoved) {
                $('#overlayImage8, #overlayImage9, #overlayImage10, #overlayImage11').css('display', 'block');
            }
        }
    }

    // 초기 뷰포트 체크
    checkViewport();

    $(window).resize(function() {
        checkViewport(); // 리사이즈 시 뷰포트 체크
    });

    $('.colorBox3').click(function() {
        // 뷰포트 크기가 915 이하일 경우 오버레이를 표시하지 않음
        if ($(window).width() <= 915) {
            $(this).animate({ top: isMoved ? '-=30vw' : '+=30vw' }, 300); // colorBox 이동
            $(this).siblings('.wangBox3').animate({ top: isMoved ? '+=20vw' : '-=20vw' }, 300); // wangBox 이동
        } else {
            // 뷰포트가 915보다 클 때는 오버레이 표시
            if (!isMoved) {
                $(this).animate({ top: '+=8vw' }, 300); // colorBox를 아래
                $(this).siblings('.wangBox3').animate({ top: '-=8vw' }, 300); // wangBox를 위
                
                // 이미지 나타나기
                $('#overlayImage8, #overlayImage9, #overlayImage10, #overlayImage11').each(function(index) {
                    $(this).css('display', 'block').css('transform', 'translateY(-8vh)'); // 위로 이동
                });

                $('#darkOverlay').css('display', 'block').css('opacity', '0').animate({ opacity: 0.7 }, 300);
            } else {
                $(this).animate({ top: '-=8vw' }, 300); // 원래 위치로
                $(this).siblings('.wangBox3').animate({ top: '+=8vw' }, 300); // 원래 위치로
                
                // 이미지 숨기기
                $('#overlayImage8, #overlayImage9, #overlayImage10, #overlayImage11').each(function(index) {
                    $(this).css('transform', 'translateY(20vh)'); // 아래로 이동
                    setTimeout(() => { $(this).css('display', 'none'); }, 300); // 애니메이션 후 숨기기
                });

                $('#darkOverlay').css('display', 'none').css('opacity', '0');
            }
        }

        isMoved = !isMoved; // 상태 변경
    });
});

//4번
$(document).ready(function() {
    let isMoved = false; // 상태 확인하고

    // 뷰포트 크기 체크 함수
    function checkViewport() {
        if ($(window).width() <= 915) {
            $('#overlayImage12, #overlayImage13, #overlayImage14').css('display', 'none');
        } else {
            if (isMoved) {
                $('#overlayImage12, #overlayImage13, #overlayImage14').css('display', 'block');
            }
        }
    }

    // 초기 뷰포트 체크
    checkViewport();

    $(window).resize(function() {
        checkViewport(); // 리사이즈 시 뷰포트 체크
    });

    $('.colorBox4').click(function() {
        // 뷰포트 크기가 915 이하일 경우 오버레이를 표시하지 않음
        if ($(window).width() <= 915) {
            $(this).animate({ top: isMoved ? '-=30vw' : '+=30vw' }, 300); // colorBox 이동
            $(this).siblings('.wangBox4').animate({ top: isMoved ? '+=20vw' : '-=20vw' }, 300); // wangBox 이동
        } else {
            // 뷰포트가 915보다 클 때는 오버레이 표시
            if (!isMoved) {
                $(this).animate({ top: '+=8vw' }, 300); // colorBox를 아래
                $(this).siblings('.wangBox4').animate({ top: '-=8vw' }, 300); // wangBox를 위
                
                // 이미지 나타나기
                $('#overlayImage12, #overlayImage13, #overlayImage14').each(function(index) {
                    $(this).css('display', 'block').css('transform', 'translateY(-8vh)'); // 위로 이동
                });

                $('#darkOverlay').css('display', 'block').css('opacity', '0').animate({ opacity: 0.7 }, 300);
            } else {
                $(this).animate({ top: '-=8vw' }, 300); // 원래 위치로
                $(this).siblings('.wangBox4').animate({ top: '+=8vw' }, 300); // 원래 위치로
                
                // 이미지 숨기기
                $('#overlayImage12, #overlayImage13, #overlayImage14').each(function(index) {
                    $(this).css('transform', 'translateY(20vh)'); // 아래로 이동
                    setTimeout(() => { $(this).css('display', 'none'); }, 300); // 애니메이션 후 숨기기
                });

                $('#darkOverlay').css('display', 'none').css('opacity', '0');
            }
        }

        isMoved = !isMoved; // 상태 변경
    });
});

//5번
$(document).ready(function() {
    let isMoved = false; // 상태 확인하고

    // 뷰포트 크기 체크 함수
    function checkViewport() {
        if ($(window).width() <= 915) {
            $('#overlayImage15, #overlayImage16, #overlayImage17').css('display', 'none');
        } else {
            if (isMoved) {
                $('#overlayImage15, #overlayImage16, #overlayImage17').css('display', 'block');
            }
        }
    }

    // 초기 뷰포트 체크
    checkViewport();

    $(window).resize(function() {
        checkViewport(); // 리사이즈 시 뷰포트 체크
    });

    $('.colorBox5').click(function() {
        // 뷰포트 크기가 915 이하일 경우 오버레이를 표시하지 않음
        if ($(window).width() <= 915) {
            $(this).animate({ top: isMoved ? '-=30vw' : '+=30vw' }, 300); // colorBox 이동
            $(this).siblings('.wangBox5').animate({ top: isMoved ? '+=20vw' : '-=20vw' }, 300); // wangBox 이동
        } else {
            // 뷰포트가 915보다 클 때는 오버레이 표시
            if (!isMoved) {
                $(this).animate({ top: '+=8vw' }, 300); // colorBox를 아래
                $(this).siblings('.wangBox5').animate({ top: '-=8vw' }, 300); // wangBox를 위
                
                // 이미지 나타나기
                $('#overlayImage15, #overlayImage16, #overlayImage17').each(function(index) {
                    $(this).css('display', 'block').css('transform', 'translateY(-8vh)'); // 위로 이동
                });

                $('#darkOverlay').css('display', 'block').css('opacity', '0').animate({ opacity: 0.7 }, 300);
            } else {
                $(this).animate({ top: '-=8vw' }, 300); // 원래 위치로
                $(this).siblings('.wangBox5').animate({ top: '+=8vw' }, 300); // 원래 위치로
                
                // 이미지 숨기기
                $('#overlayImage15, #overlayImage16, #overlayImage17').each(function(index) {
                    $(this).css('transform', 'translateY(20vh)'); // 아래로 이동
                    setTimeout(() => { $(this).css('display', 'none'); }, 300); // 애니메이션 후 숨기기
                });

                $('#darkOverlay').css('display', 'none').css('opacity', '0');
            }
        }

        isMoved = !isMoved; // 상태 변경
    });
});
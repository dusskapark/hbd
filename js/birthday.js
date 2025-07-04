// Scene 6 케이크와 촛불 애니메이션
$(document).ready(function() {
    // ScrollMagic 컨트롤러 생성
    var controller = new ScrollMagic.Controller();
    
    // Scene 6 케이크 애니메이션
    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.scene-6',
        triggerHook: 0.8,
        duration: 0
    })
    .on('enter', function() {
        console.log('Scene 6 애니메이션 시작');
        
        // 케이크가 올라오는 애니메이션
        TweenMax.to('.cake-final', 1, {
            opacity: 1,
            y: 0,
            ease: Power2.easeOut,
            onComplete: function() {
                console.log('케이크 애니메이션 완료');
                
                // 촛불을 즉시 보이게 하고 위치 조정
                $('.candle-final').css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
                
                // 불꽃 효과 즉시 시작
                setTimeout(function() {
                    $('.candle-final').addClass('lit');
                    console.log('촛불 불꽃 효과 시작');
                }, 200);
            }
        });
        
        // Happy Birthday 텍스트 애니메이션
        TweenMax.to('.hbd', 1, {
            opacity: 1,
            scale: 1,
            ease: Power2.easeOut,
            delay: 1.5
        });
    })
    .addTo(controller);
    
    // Scene 7 풍선 애니메이션
    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.scene-7',
        triggerHook: 0.8,
        duration: 0
    })
    .on('enter', function() {
        console.log('Scene 7 애니메이션 시작');
        startBalloons();
    })
    .addTo(controller);
});

// 풍선 애니메이션 함수
function startBalloons() {
    const balloons = document.querySelectorAll('.balloon');
    
    balloons.forEach((balloon, index) => {
        setTimeout(() => {
            balloon.style.animation = 'float-up 8s ease-out infinite';
        }, index * 1000);
    });
    
    // 풍선을 계속 생성하는 함수
    setInterval(() => {
        balloons.forEach((balloon, index) => {
            setTimeout(() => {
                balloon.style.animation = 'none';
                balloon.offsetHeight; // 리플로우 강제 실행
                balloon.style.animation = 'float-up 8s ease-out infinite';
            }, index * 1000);
        });
    }, 10000);
} 
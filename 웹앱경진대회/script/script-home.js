jQuery(document).ready(function () {
    let index = 0;
    const slideCount = 3;
    const slideWidth = 1070;   // 네 슬라이드 가로 크기

    setInterval(function () {
        index++;

        $('.slidelist ul').animate({
            marginLeft: -slideWidth * index
        }, 600, function () {

            // ✅ 마지막 슬라이드면 바로 첫 번째로 이동
            if (index === slideCount) {
                index = 0;
                $('.slidelist ul').css('margin-left', '0px');
            }

        });

    }, 3000);
    document.addEventListener('DOMContentLoaded', function () {
        const notice = document.getElementById('noticeText');
        const toggleBtn = document.getElementById('noticeToggleBtn');

        if (!notice || !toggleBtn) return;

        toggleBtn.addEventListener('click', function () {
            notice.classList.toggle('open');
            toggleBtn.textContent = notice.classList.contains('open') ? '접기' : '전체 보기';
        });
    });

});
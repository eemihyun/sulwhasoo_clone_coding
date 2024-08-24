$(function(){
    const btn_tab = $('.recomm_tab a.btn_tab');
    const recomm_list = $('.recomm_list');

    btn_tab.click(recomm);

    function recomm(e) {
        e.preventDefault(); // 클릭시 위로 올라가는 이벤트 방지

        const idx = $(this).index(); // 현재 내가 누른 순서값을 idx에 저장
        // console.log('idx '+idx);

        btn_tab.removeClass('On');
        $(this).addClass('On');

        recomm_list.removeClass('Act');
        recomm_list.eq(idx).addClass('Act');
    };
});
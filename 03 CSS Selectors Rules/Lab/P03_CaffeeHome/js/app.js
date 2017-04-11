function startApp() {

    calcHeight()
    $(window).resize(calcHeight);

    function calcHeight() {
        let itemsHeight = ($('#header-last').height()) + ($('#paragraph-last').height());
        itemsHeight += 18;  // adding 27px padding at the bottom

        $('.wrapper-transparent').css('height', itemsHeight);
    }
}
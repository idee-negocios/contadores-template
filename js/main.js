(function() {
    $(function() {
        // Cols with equal height
        $('.info').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        $('.header-image').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

        // Animation
        $('.header-title').hide();
        $('.header-title').fadeIn(1000);

        $('.header-image').hide();
        $('.header-image').fadeIn(1500);

        $('.header-image-bottom').hide();
        $('.header-image-bottom').fadeIn(1500);

        $('.thumbnail').hide();

        var time = 200;
        $('.thumbnail').each(function(index) {
            $(this).fadeIn(time);
            time += 500;
        });


        // Activate menu
        var menu = document.querySelector('.menu');
        var items = menu.getElementsByTagName('li');

        var uri = window.location.pathname;

        switch (uri) {
            case '/inicio':
                items[0].setAttribute('class', 'active');
                break;
            case '/quienes_somos':
                items[1].setAttribute('class', 'active');
                break;
            case '/area_competencia':
                items[2].setAttribute('class', 'active');
                break;
            case '/contacto':
                items[3].setAttribute('class', 'active');
                break;
            default:
                items[0].setAttribute('class', 'active');
        }
    });
})();

window.addEventListener('load', function () {

    function toggleMenu(){
        document.querySelector('.menu_mobile').classList.toggle('show');
        document.querySelector('.burger').classList.toggle('close');
    }

    let burgerBtn = document.querySelector('.burger');
                
    burgerBtn.addEventListener('click', toggleMenu);

    let lastScroll = 0;
    const defaultScroll = 100;
    const intervalScroll = 300;
    const header = document.querySelector('.header');

    const scrollPosition = () => document.documentElement.scrollTop;
    const headerFixed = () => header.classList.contains('sticky');

    window.addEventListener('scroll', () => {
        if ( scrollPosition() > lastScroll && !headerFixed() && scrollPosition() > defaultScroll && scrollPosition() < intervalScroll ) {
            header.classList.add('sticky');
        } else if ( scrollPosition() < lastScroll && headerFixed() && scrollPosition() < defaultScroll ) {
            header.classList.remove('sticky');
        }

        lastScroll = scrollPosition();
    })

})

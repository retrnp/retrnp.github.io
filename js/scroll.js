// onscroll event
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (scrollY > 1) {
        main_container.style.display = 'flex';
        main_container.style.animation = 'raise-in 1.5s';
    }
});

// scroll to top before unload
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

document.getElementById('btn-explore').addEventListener('click', function () {
    window.scrollTo(0, 10);
});

window.addEventListener('resize', function () {
    resize();
});

function resize() {
    var toolbars = document.getElementsByClassName('toolbar');
    // resize all to 75px if height>width
    var style = document.head.appendChild(document.createElement('style'));
    if (window.innerHeight > window.innerWidth) {
        style.innerHTML = `.album:hover .toolbar{height: 75px;}
        .toolbar a{font-size: 1.23rem;}
        .album h1{font-size: 1.8rem;}
        .btn-toggle>img{width: 35px; height: 35px;}
        `;
    } else {
        style.innerHTML = `.album:hover .toolbar{height: 75px;}
        .toolbar a{font-size: .8rem;}
        .album h1{font-size: 1.5rem;}
        .btn-toggle>img{width: 20px; height: 20px;}
        `;
    }
}
resize();
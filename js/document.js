// Wait starting animation and add placeholder
setTimeout(function () {
    var placeholder = document.createElement('body');
    placeholder.classList.add('placeholder1vh');
    document.body.appendChild(placeholder);
}, 1500);


var toggles = document.getElementsByClassName('btn-toggle');
var previews = document.getElementsByClassName('previews');

for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function () {
        var canPlay = this.getAttribute('data-can-play');
        if (canPlay == 'true') {
            this.parentElement.children[0].play();
            this.setAttribute('data-can-play', 'false');
            this.children[0].src = './icons/pause.svg';
            this.parentElement.parentElement.children[1].style.opacity = '0.7';
            for (let j = 0; j <= previews.length; j++) {
                if (previews[j] != this.parentElement.children[0]) {
                    previews[j].pause();
                    previews[j].currentTime = 0;
                    toggles[j].setAttribute('data-can-play', 'true');
                    toggles[j].children[0].src = './icons/play.svg';
                    toggles[j].parentElement.parentElement.children[1].style.opacity = '0';
                }
            }
        } else {
            this.parentElement.children[0].pause();
            this.parentElement.children[0].currentTime = 0;
            this.setAttribute('data-can-play', 'true');
            this.children[0].src = './icons/play.svg';
            this.parentElement.parentElement.children[1].style.opacity = '0';
        }
        this.parentElement.children[0].addEventListener('ended', function () {
            this.pause();
            this.parentElement.children[1].setAttribute('data-can-play', 'true');
            this.parentElement.children[1].children[0].src = './icons/play.svg';
            this.parentElement.parentElement.children[1].style.opacity = '0';
        });
    });
}
function fullscreenElectronApp(tf = 'toggle') {
    if (tf == 'toggle') {
        // fetch api provided: localhost:2367/toggleFullscreen with post
        fetch('http://localhost:2367/toggleFullscreen', {
            method: 'POST'
        });
    }
    else {
        // fetch api provided: localhost:2367/fullscreen/:tf with post
        fetch(`http://localhost:2367/fullscreen/${tf}`, {
            method: 'POST'
        });
    }
}

function removetheme() {
    // Remove all style sheets, apart from player.css
    var styles = document.querySelectorAll('link');
    styles.forEach(function (style) {
        if (style.href != 'player.css') {
            style.remove();
        }
    });
}
function theme(t) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = t;
    document.head.appendChild(style);
}

var immerse = () => {
    // Add style sheet to document
    removetheme();
    theme('player.css');
    theme('themes/immerse.css');
    localStorage.setItem('theme', 'immerse');
    fullscreenElectronApp(true);
}

var desktop = () => {
    // Add style sheet to document
    removetheme();
    theme('player.css');
    theme('themes/desktop.css');
    localStorage.setItem('theme', 'desktop');
    fullscreenElectronApp(true);
    // Set img src
    document.querySelector('#prev>img').src = '../assets/icons/svg/dark/prev.svg';
    document.querySelector('#toggle>img').src = '../assets/icons/svg/dark/play.svg';
    document.querySelector('#next>img').src = '../assets/icons/svg/dark/next.svg';
    toggleIcons = ['../assets/icons/svg/dark/play.svg', '../assets/icons/svg/dark/pause.svg'];
}

var normal = () => {
    // Add style sheet to document
    removetheme();
    theme('player.css');
    localStorage.setItem('theme', 'normal');
    document.querySelector('#prev>img').src = '../assets/icons/svg/prev.svg';
    document.querySelector('#toggle>img').src = '../assets/icons/svg/play.svg';
    document.querySelector('#next>img').src = '../assets/icons/svg/next.svg';
    toggleIcons = ['../assets/icons/svg/play.svg', '../assets/icons/svg/pause.svg'];
}

// ADDED: moblie theme
var mobile = () => {
    // Add style sheet to document
    normal();
    removetheme();
    theme('player.css');
    theme('themes/mobileADDED.css');

    // Add meta tags
    var viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, minimal-ui');
    document.head.appendChild(viewportMeta);

    var titleMeta = document.createElement('meta');
    titleMeta.setAttribute('name', 'apple-mobile-web-app-title');
    titleMeta.setAttribute('content', 'Player');
    document.head.appendChild(titleMeta);

    var capableMeta = document.createElement('meta');
    capableMeta.setAttribute('name', 'apple-mobile-web-app-capable');
    capableMeta.setAttribute('content', 'yes');
    document.head.appendChild(capableMeta);

    var statusBarMeta = document.createElement('meta');
    statusBarMeta.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
    statusBarMeta.setAttribute('content', 'black');
    document.head.appendChild(statusBarMeta);

    // <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, minimal-ui">
    // <meta name="apple-mobile-web-app-title" content="Eve" />
    // <meta name="apple-mobile-web-app-capable" content="yes">
    // <meta name="apple-mobile-web-app-status-bar-style" content="black" />
}

if (localStorage.getItem('theme') == 'immerse') {
    immerse();
}

if (localStorage.getItem('theme') == 'desktop') {
    desktop();
}

if (innerWidth < innerHeight) mobile(); // ADDED


function themeSelect() {
}

function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;

}
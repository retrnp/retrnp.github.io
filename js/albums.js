
const main_container = this.document.getElementById('main-container');

var songs = ['My Own World', 'Repic', 'the Song for Eve', 'You', 'New World', 'Deep', 'Ruin', 'The Love Story', 'Unknown (2024)'];
var albums = ['With Them', 'With Them', 'With Them', 'With Them', 'ReTrn Piano Set - New World', 'The Love Story', 'The Love Story', 'The Love Story', 'Unknown']

for (var i = 0; i < songs.length; i++) {
    var album = document.createElement('span');
    album.classList.add('album');
    // create children
    album.innerHTML = `
    <img src="./img/${albums[i]}.jpg" alt="">
    <img src="./icons/music_note.svg" alt="icon">
    <h1>${songs[i]}</h1>
    <div class="toolbar">
        <audio src="./sounds/${songs[i]}.mp3" class="previews"></audio>
        <div class="btn-toggle" data-can-play="true"><img src="./icons/play.svg" alt=""></div>
        <a data-song="${songs[i]}" href="./player/player.html?song=${songs[i]}&cover=${albums[i]}">Listen Full</a>
    </div>
    `;
    main_container.appendChild(album);
    if (albums[i] == 'Unknown') {
        album.children[3].remove();
    }
}

main_container.innerHTML += `<span class='br'></span><div class='seletion'><div class='platforms'>
        <a href='https://apple.co/3GO8QLX'><span class='platform' platform='apple'></span></a>
        <a href='https://music.youtube.com/channel/UCGR3MmXOYrBzPft_FYR3-ZA'><span class='platform' platform='youtube'></span></a>
        <a href='https://music.amazon.com/artists/B0BJ9H1B76/retrn'><span class='platform' platform='amazon'></span>
        <a href='https://open.spotify.com/artist/0btWopdzlTVPpYCU7EYimG'><span class='platform' platform='spotify'></span></a>
        </a></div></div>`
main_container.innerHTML += `<div class="footer">© ReTrn 2023. Website by<span class='nowrap'> AlphaBrate <a href='https://starwe.github.io/'>Star Web</a></span>.<br>AlphaBrate ℗ ALL Recordings' Right Reserved. DO NOT DISRIBUTE. </div>`;
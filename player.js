const song = location.search.split("?s=")[1]

const getSong = s => {
    fetch("./res/json/songs.json").then(response=>response.json()).then(data=>{
        data.forEach(w=>{
            if(w.name.toLowerCase()==s){
                document.getElementById("pic").src = w.song.image;
                document.getElementById("title").innerText = w.name;
                document.getElementById("year").innerText = w.year;
                document.getElementById("set").innerText = w.album;
                let a = document.createElement("audio");
                a.src = w.song.url;
                a.style.display = "none";
                document.body.append(a);
                document.getElementById("toggle").addEventListener("click",()=>{
                    if(a.paused){
                        a.play();
                        document.getElementById("toggle").innerHTML=`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="21" y="19" width="2" height="13" rx="1" fill="white"/>
                        <rect x="28" y="19" width="2" height="13" rx="1" fill="white"/>
                        </svg>`
                    } else {
                        a.pause();
                        document.getElementById("toggle").innerHTML=`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4444 32.8357C20.1304 33.0438 19.8112 33.0542 19.4867 32.8669C19.1622 32.6796 19 32.3986 19 32.024V17.976C19 17.6014 19.1622 17.3204 19.4867 17.1331C19.8112 16.9458 20.1304 16.9562 20.4444 17.1643L31.5604 24.2196C31.8535 24.4069 32 24.667 32 25C32 25.333 31.8535 25.5931 31.5604 25.7804L20.4444 32.8357Z" fill="white"/>
                        </svg>`
                    };
                });
                document.getElementById("start").addEventListener("click",()=>{
                    return a.currentTime-=10;
                });
                document.getElementById("end").addEventListener("click",()=>{
                    return a.currentTime+=10;
                });
                document.getElementById("ne").href = "https://music.163.com/#/song?id=" + w.netease;
                if(w.netease=="N") document.getElementById("ne").remove();
                if(w.full) document.getElementById("previewonly").innerText = "Free for everyone!";
                setInterval(()=>{
                    let c = document.getElementById("current");
                    let t = a.currentTime;
                    let tt = a.duration;
                    let d = document.getElementById("d");
                    let lod = d.offsetWidth;
                    let p = t/tt;
                    c.style.left = `${(lod*p)-5}px`;
                },10)
                document.body.style.backgroundImage = `url(${w.song.image})`
                return;
            }
        });
    });
}

getSong(song);
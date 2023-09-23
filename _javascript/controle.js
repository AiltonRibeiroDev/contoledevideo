var changeSize = (w, h) => {
    var vid = document.getElementById("video1");
    vid.width = w;
    vid.height = h;
}



var play_pause = () => {
    var vid = document.getElementById("video1");
    var but = document.getElementById("play_pause");
    if (vid.paused) {
        vid.play();
        but.innerHTML = "&nbsp;PAUSE&nbsp;";
    } else {
        vid.pause();
        but.innerHTML = "&nbsp;PLAY&nbsp;";
    }
}

var meuVideo = document.getElementById("video1");

function telaCheia(){      

    meuVideo.requestFullscreen();  

}  



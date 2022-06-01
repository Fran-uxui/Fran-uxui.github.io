 function playPause(videoID) {
     var myVideo = document.getElementById(videoID);

     if (myVideo.paused) {
         myVideo.play();
     } else {
         myVideo.pause();
         myVideo.currentTime = 0;
         v = myVideo.currentSrc;
         myVideo.src = '';
         myVideo.src = v;
     }
 }
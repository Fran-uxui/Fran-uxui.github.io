 function playPause(videoID) {
     let myVideo = document.getElementById(videoID);

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

 // mantains the video in a 16:9 aspect ratio based on the viewport height
 function maintainAspectRatio() {
     let myVideo = document.getElementById('video-home');
     let videoHeight = myVideo.clientHeight;
     let videoWidth = myVideo.clientWidth;
     let videoAspectRatio = videoWidth / videoHeight;
     let viewportHeight = window.innerHeight;
     let viewportWidth = window.innerWidth;
     let viewportAspectRatio = viewportWidth / viewportHeight;
     if (videoAspectRatio > viewportAspectRatio) {
         myVideo.style.height = viewportHeight + 'px';
         myVideo.style.width = viewportHeight * videoAspectRatio + 'px';
     } else {
         myVideo.style.width = viewportWidth + 'px';
         myVideo.style.height = viewportWidth / videoAspectRatio + 'px';
     }
 }

 // hides 'video-home' overflow 
 function hideVideoOverflow() {
     let myVideo = document.getElementById('video-home');
     myVideo.style.overflow = 'hidden';
 }

 // activates maintainAspectRatio() when the window is resized
 window.onresize = maintainAspectRatio;
 window.onload = maintainAspectRatio;




 function overlaydisolve(overlayID) {
     let overlay = document.getElementById(overlayID);
     overlay.style.opacity = "0%";
 }

 function overlayappear(overlayID) {
     let overlay = document.getElementById(overlayID);
     overlay.style.opacity = "100%";
 }

 // gets the video-home-overlay and makes the same size as the video-home video 
 function getVideoOverlay() {
     let videoOverlay = document.getElementById('video-home-overlay');
     let video = document.getElementById('video-home');
     videoOverlay.style.width = video.clientWidth + 'px';
     videoOverlay.style.height = video.clientHeight + 'px';
 }
 window.onload = getVideoOverlay;
 window.onresize = getVideoOverlay;


 // changes the nav background color when the user scrolls down the page 
 function changeNavBackground() {
     nav.style.backgroundColor = '#fff';

 }
 window.onload = changeNavBackground;

 function openmenu() {
     document.getElementById("open").style.display = "none";
     document.getElementById("close").style.display = "block";
     document.getElementById("nav").style.display = "flex";
 }


 function closemenu() {
     document.getElementById("close").style.display = "none";
     document.getElementById("open").style.display = "block";
     document.getElementById("nav").style.display = "none";
 }
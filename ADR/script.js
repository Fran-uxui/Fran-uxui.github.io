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

 var unl1 = "https://www.youtube.com/embed/QH2-TGUlwu4";

 // on first click adds class 'active' and on second click opens url in new tab
 function openLink(linkID) {
     let link = document.getElementById(linkID);
     if (link.classList.contains('active')) {
         window.open(link.href, '_blank');
     } else {
         link.classList.add('active');
     }
 }
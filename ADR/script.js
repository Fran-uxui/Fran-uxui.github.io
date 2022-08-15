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





 function overlaydisolve(overlayID) {
     let overlay = document.getElementById(overlayID);
     overlay.style.opacity = "0%";
 }

 function overlayappear(overlayID) {
     let overlay = document.getElementById(overlayID);
     overlay.style.opacity = "100%";
 }

 // gets the video-home-overlay and makes the same size as the video-home video 



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

 // function on click urldirect, when the user clicks on the element the page will redirect with the url in the variable 
 function urldirect(url) {
     window.location.href = url;
 }

 // onload the element loading id will decrease opacity to 0 and then display none
 function loading() {
     let loading = document.getElementById('loading');
     // gets logo-loading and makes it width 15rem 
     let logoLoading = document.getElementById('logo-loader');
     logoLoading.style.width = '15rem';
     loading.style.opacity = "0";
     loading.style.display = "none";
     nav.style.backgroundColor = '#fff';
 }



 function moveimg(topimg) {
     document.getElementById(topimg).style.transform = "translateX(-100%)";
 }

 function moveimgback(topimg) {
     document.getElementById(topimg).style.transform = "translateX(0%)";
 }

 function changesrc() {
     document.getElementById('home-xl-video').src = 'img/web-1.mp4';
     document.getElementById('video-home').play();
 }

 window.onload = function() {

     maintainAspectRatio();
 }

 document.addEventListener("DOMContentLoaded", function() {
     setTimeout(function() {
         loading();
     }, 800);


 });
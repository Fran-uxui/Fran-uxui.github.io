
    $(document).ready(function() { 
      if (window.screen.width > 500) {
      var html = '';
      for (var i = 1; i <= 50; i++) {
        html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
      }
      document.querySelector('.shape').innerHTML += html;
      
      }}); 
      $(".proj1").hover(function(){
      $(".random-shape").addClass("hifu");
      }, function() {
    $(".random-shape").removeClass("hifu");

  });
      $(".proj2").hover(function(){
      $(".random-shape").addClass("profit");
      }, function() {
    $(".random-shape").removeClass("profit");

  });
      $(".proj3").hover(function(){
      $(".random-shape").addClass("cabo");
      }, function() {
    $(".random-shape").removeClass("cabo");

  });
      $(".proj4").hover(function(){
      $(".random-shape").addClass("eat");
      }, function() {
    $(".random-shape").removeClass("eat");
});

$(".goback").hover(function(){
    $(".shape").addClass("nodisp");
    }, function() {
  $(".shape").delay(500).removeClass("nodisp");
});
        function homefunc() {
          var x = document.querySelector('.inicio');
          x.classList.add('chikito');
          var x = document.querySelector('.home-left');
          x.classList.add('invisible');
          var x = document.querySelector('.home-right');
          x.classList.add('invisible');
          setTimeout(() => { var x = document.querySelector('.seccion');
          x.classList.add('nodisp'); }, 1200);
        }
        function processfunc() {
           setTimeout(() => { var x = document.querySelector('.process');
          x.classList.add('corrector'); }, 1200);
        }
        function clientfunc() {
            var x = document.querySelector('.process');
          x.classList.add('nodisp');
          setTimeout(() => { var x = document.querySelector('.clients');
          x.classList.add('corrector'); }, 1200);
        }
        function aboutfunc() {
          var x = document.querySelector('.clients');
          x.classList.add('nodisp');
          setTimeout(() => { var x = document.querySelector('.about-me');
          x.classList.add('corrector'); }, 1200);
            } 
        function contactfunc() {
          var x = document.querySelector('.about-me');
          x.classList.add('nodisp');   
          setTimeout(() => { var x = document.querySelector('.contact');
          x.classList.add('corrector'); }, 1200);
        }

        function homefuncback() {
          var x = document.querySelector('.seccion');
          x.classList.remove('nodisp');
          setTimeout(() => { var x = document.querySelector('.inicio');
          x.classList.remove('chikito'); }, 0);
          setTimeout(() => { var x = document.querySelector('.home-left');
          x.classList.remove('invisible');}, 700);
          setTimeout(() => { var x = document.querySelector('.home-right');
          x.classList.remove('invisible');}, 700);
          

        }
        function processfuncback() {
           var x = document.querySelector('.process');
          x.classList.remove('corrector');
        }

        function clientfuncback() {
          var x = document.querySelector('.clients');
          x.classList.remove('corrector');
          setTimeout(() => {  var x = document.querySelector('.process');
          x.classList.remove('nodisp');}, 1200);
        }
        function aboutfuncback() {
         var x = document.querySelector('.about-me');
          x.classList.remove('corrector');
          setTimeout(() => { var x = document.querySelector('.clients');
          x.classList.remove('nodisp');}, 1200);
            } 
        function contactfuncback() {
          var x = document.querySelector('.contact');
          x.classList.remove('corrector'); 
          setTimeout(() => {  var x = document.querySelector('.about-me');
          x.classList.remove('nodisp');}, 1200);
        }

      const proc = document.getElementById('process-btn');
      proc.addEventListener('click', homefunc, false);
        proc.addEventListener('click', processfunc, false);
      const cli = document.getElementById('clients-btn');
        cli.addEventListener('click', homefunc, false);
        cli.addEventListener('click', clientfunc, false);
      const abt = document.getElementById('about-btn');
        abt.addEventListener('click', aboutfunc, false);
        abt.addEventListener('click', homefunc, false);
        abt.addEventListener('click', clientfunc, false);
       const cnt = document.getElementById('contact-btn');
        cnt.addEventListener('click', aboutfunc, false);
        cnt.addEventListener('click', homefunc, false);
        cnt.addEventListener('click', clientfunc, false);
        cnt.addEventListener('click', contactfunc, false);
      const procback = document.getElementById('process-goback');
      procback.addEventListener('click', homefuncback, false);
        procback.addEventListener('click', processfuncback, false);

      const cliback = document.getElementById('clients-goback');
        cliback.addEventListener('click', homefuncback, false);
        cliback.addEventListener('click', clientfuncback, false);
      const abtback = document.getElementById('about-goback');
        abtback.addEventListener('click', aboutfuncback, false);
        abtback.addEventListener('click', homefuncback, false);
        abtback.addEventListener('click', clientfuncback, false);
       const cntback = document.getElementById('contact-goback');
        cntback.addEventListener('click', aboutfuncback, false);
        cntback.addEventListener('click', homefuncback, false);
        cntback.addEventListener('click', clientfuncback, false);
        cntback.addEventListener('click', contactfuncback, false);

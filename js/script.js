  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  toggle.addEventListener('click', function(){
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('open'); });
  });

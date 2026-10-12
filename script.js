function goToScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}

function blowCandle() {
  var flame = document.getElementById('flameGroup');
  var smoke = document.getElementById('smokeGroup');
  var caption = document.getElementById('cakeCaption');
  if (flame.classList.contains('out')) return;
  flame.classList.add('out');
  smoke.classList.add('show');
  caption.textContent = 'Wish granted 💫 semoga semua impian aby tercapai!';
}

function openGift(e) {
  var box = document.getElementById('giftBox');
  var msg = document.getElementById('surpriseMsg');
  if (box.classList.contains('open')) return;
  box.classList.add('open');
  msg.classList.add('show');
  popHearts(e.clientX, e.clientY);
}

function popHearts(x, y) {
  var hearts = ['💛','✨','🎉','💫'];
  for (var i = 0; i < 14; i++) {
    (function(){
      var el = document.createElement('div');
      el.className = 'heart-pop';
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      document.body.appendChild(el);
      var dx = (Math.random() * 200 - 100);
      var dy = -(80 + Math.random() * 140);
      var rot = (Math.random() * 180 - 90);
      var anim = el.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + rot + 'deg)', opacity: 0 }
      ], { duration: 1200 + Math.random() * 500, easing: 'ease-out' });
      anim.onfinish = function(){ el.remove(); };
    })();
  }
}
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
  setTimeout(releaseBalloons, 500);
}

function releaseBalloons() {
  var colors = ['#b3495a', '#c79a5b', '#e7b8c2', '#8a2e3d', '#f4d58d', '#d97e8d'];
  for (var i = 0; i < 16; i++) {
    (function(i){
      var b = document.createElement('div');
      b.className = 'balloon';
      b.style.setProperty('--c', colors[i % colors.length]);
      b.style.left = (Math.random() * 92 + 2) + 'vw';
      var size = 42 + Math.random() * 26;
      b.style.width = size + 'px';
      b.style.height = (size * 1.22) + 'px';
      document.body.appendChild(b);
      var sway = (Math.random() * 80 - 40);
      var anim = b.animate([
        { transform: 'translate(0, 0) rotate(-4deg)' },
        { transform: 'translate(' + sway + 'px, -60vh) rotate(4deg)', offset: 0.5 },
        { transform: 'translate(' + (-sway / 2) + 'px, -130vh) rotate(-3deg)' }
      ], { duration: 5000 + Math.random() * 3000, delay: Math.random() * 1500, easing: 'ease-in', fill: 'both' });
      anim.onfinish = function(){ b.remove(); };
    })(i);
  }
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
!function(){
  var C='.lbl{font-size:.76rem;font-weight:600;letter-spacing:.28em;color:#d6ecff}';
  C+='.lbl:before{content:"\\2665 ";color:#ff3b5c}.lbl:after{content:" \\2665";color:#ff3b5c}';
  C+='.frase{font-weight:500;color:#fff;text-shadow:0 0 30px rgba(255,59,92,.35),0 0 62px rgba(140,198,255,.2)}';
  C+='.frase em{color:#ff7d95;text-shadow:0 0 26px rgba(255,59,92,.7)}';
  C+='.txt{color:#e3eefb}.fina{color:#cfe2f5}';
  C+='.p-nom{background:linear-gradient(120deg,#fff,#ffb3c1 28%,#ff3b5c 52%,#ffe6a7 88%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:destella 5s ease-in-out infinite;filter:drop-shadow(0 0 34px rgba(255,59,92,.45))}';
  C+='.punto{width:auto;height:auto;background:none;border-radius:0}';
  C+='.punto:after{content:"\\2665";display:block;font-size:28px;color:#ff3b5c;animation:latirC 1.4s ease-in-out infinite;filter:drop-shadow(0 0 14px rgba(255,59,92,.85))}';
  C+='@keyframes latirC{0%,100%{transform:scale(1)}20%{transform:scale(1.3)}40%{transform:scale(1)}60%{transform:scale(1.18)}}';
  C+='#prog{height:2px;background:linear-gradient(90deg,#ff3b5c,#ffe6a7)}';
  C+='.foto{border:1px solid rgba(255,59,92,.38);box-shadow:0 12px 42px rgba(255,59,92,.18)}';
  C+='.foto img{filter:none}.foto:hover{box-shadow:0 18px 56px rgba(255,59,92,.45)}';
  C+='.cinta .c{border:1px solid rgba(255,59,92,.3)}.cinta .c img{filter:none}';
  C+='.capa{border-color:rgba(255,59,92,.42)}.plato{border-color:rgba(255,59,92,.42)}';
  C+='.vela{background:linear-gradient(180deg,#ff7d95,#2f5a86)}';
  C+='.fl{background:radial-gradient(circle at 50% 40%,#fff,#ffd166 45%,#ff3b5c);box-shadow:0 0 22px 7px rgba(255,59,92,.6)}';
  C+='.firma .n{color:#fff;text-shadow:0 0 26px rgba(255,59,92,.55)}.firma .n:after{content:" \\2665";color:#ff3b5c}';
  C+='#bm{color:#ffd6de;border:1px solid rgba(255,59,92,.55);border-radius:40px;margin:14px;padding:10px 18px}';
  C+='.corazon{position:fixed;pointer-events:none;z-index:120;color:#ff3b5c;animation:flotaC linear forwards;filter:drop-shadow(0 0 9px rgba(255,59,92,.75))}';
  C+='@keyframes flotaC{0%{transform:translateY(0) scale(.6);opacity:0}12%{opacity:1}100%{transform:translateY(-112vh) scale(1.15);opacity:0}}';
  C+='.boom{position:fixed;pointer-events:none;z-index:300;color:#ff3b5c;animation:boomC .9s ease-out forwards}';
  C+='@keyframes boomC{0%{transform:translate(0,0) scale(.4);opacity:1}100%{transform:translate(var(--dx),var(--dy)) scale(1.4);opacity:0}}';
  var S=document.createElement('style');S.textContent=C;document.head.appendChild(S);
  var H=String.fromCharCode(9829);
  setInterval(function(){var d=document.createElement('div');d.className='corazon';d.textContent=H;d.style.left=Math.random()*100+'vw';d.style.bottom='-30px';d.style.fontSize=(11+Math.random()*17)+'px';d.style.animationDuration=(9+Math.random()*7)+'s';document.body.appendChild(d);setTimeout(function(){d.remove();},17000);},700);
  function boom(x,y){for(var i=0;i<16;i++){var b=document.createElement('div');b.className='boom';b.textContent=H;b.style.left=x+'px';b.style.top=y+'px';b.style.fontSize=(10+Math.random()*15)+'px';var an=Math.random()*6.283,r=50+Math.random()*130;b.style.setProperty('--dx',(Math.cos(an)*r)+'px');b.style.setProperty('--dy',(Math.sin(an)*r)+'px');document.body.appendChild(b);(function(e){setTimeout(function(){e.remove();},1000);})(b);}}
  document.addEventListener('click',function(e){boom(e.clientX,e.clientY);var a=document.getElementById('cancion');if(a&&a.paused){a.volume=.85;a.play().catch(function(){});}},{passive:true});
}();

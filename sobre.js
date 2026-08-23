!function(){
var D=document,H=String.fromCharCode(9829);
var W=Math.min(320,Math.round(window.innerWidth*.76)),A=Math.round(W*.64),F=Math.round(A*.62);
function E(t,s,h){var e=D.createElement(t);if(s)e.style.cssText=s;if(h)e.innerHTML=h;return e;}
var sb=E('div','position:fixed;left:0;top:0;right:0;bottom:0;z-index:99999;background-color:#0b2138;background-image:radial-gradient(circle at 50% 36%,#1c4670,#07172a 74%);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:opacity 1.2s ease,visibility 1.2s');
sb.id='sb';
var sv=E('div','position:relative;width:'+W+'px;height:'+A+'px;perspective:1500px;transition:transform 1.3s cubic-bezier(.3,.8,.3,1)');
var bk=E('div','position:absolute;left:0;top:0;right:0;bottom:0;border-radius:10px;background:linear-gradient(150deg,#a80f26,#d81c39);box-shadow:0 32px 74px rgba(0,0,0,.62),0 0 78px rgba(255,59,92,.34)');
var ht=E('div','position:absolute;left:7%;right:7%;bottom:11%;height:116%;z-index:2;background:linear-gradient(180deg,#fffdfa,#ffeef2);border-radius:5px;box-shadow:0 -14px 38px rgba(0,0,0,.34);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:12px;transform:translateY(7%);opacity:0;transition:transform 1.5s cubic-bezier(.25,.9,.3,1),opacity .8s ease',
'<div style="font-family:Cormorant Garamond,Georgia,serif;font-style:italic;font-size:'+Math.round(W*.145)+'px;color:#c1122c;line-height:1.02">Para Lore</div><div style="font-size:'+Math.round(W*.08)+'px;color:#ff3b5c;margin-top:2px">'+H+'</div><div style="font-family:Inter,sans-serif;font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:#dd93a2;margin-top:8px">De Annys Pe&ntilde;a</div>');
var fr=E('div','position:absolute;left:0;top:0;right:0;bottom:0;z-index:3;border-radius:10px;overflow:hidden;background:linear-gradient(168deg,#ff4d68,#c8112a);box-shadow:inset 0 10px 26px rgba(0,0,0,.14)');
fr.appendChild(E('i','position:absolute;left:0;top:0;width:100%;height:64%;background:linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.03));-webkit-clip-path:polygon(0 0,50% 100%,100% 0);clip-path:polygon(0 0,50% 100%,100% 0)'));
var fl=E('div','position:absolute;left:0;top:0;width:0;height:0;z-index:4;border-left:'+Math.round(W/2)+'px solid transparent;border-right:'+Math.round(W/2)+'px solid transparent;border-top:'+F+'px solid #e5203d;transform-origin:50% 0;transform:rotateX(0deg);transition:transform 1.15s cubic-bezier(.55,0,.25,1);filter:drop-shadow(0 5px 12px rgba(0,0,0,.3))');
var sl=E('div','position:absolute;left:50%;top:'+Math.round(F*.92)+'px;transform:translate(-50%,-50%);z-index:5;width:54px;height:54px;border-radius:50%;background:radial-gradient(circle at 34% 28%,#ff89a0,#98071f);box-shadow:0 7px 20px rgba(0,0,0,.5),inset 0 -4px 9px rgba(0,0,0,.34);display:flex;align-items:center;justify-content:center;color:#ffd9e0;font-size:23px;transition:transform .55s ease,opacity .55s ease',H);
sv.appendChild(bk);sv.appendChild(ht);sv.appendChild(fr);sv.appendChild(fl);sv.appendChild(sl);
var tx=E('div','margin-top:52px;font-family:Inter,sans-serif;font-size:.66rem;letter-spacing:.32em;text-transform:uppercase;color:#ffc2cd;transition:opacity .5s ease;animation:sbrr 2.6s ease-in-out infinite',H+' Toca para abrir tu carta '+H);
var S=D.createElement('style');S.textContent='@keyframes sbrr{0%,100%{opacity:.35}50%{opacity:1}}';D.head.appendChild(S);
sb.appendChild(sv);sb.appendChild(tx);
function ini(){D.body.appendChild(sb);}
if(D.body){ini();}else{D.addEventListener('DOMContentLoaded',ini);}
var ab=false;
sb.addEventListener('click',function(){
if(ab)return;ab=true;
var a=D.getElementById('cancion');if(a){a.volume=.85;var q=a.play();if(q&&q.catch)q.catch(function(){});}
tx.style.animation='none';tx.style.opacity='0';
sl.style.transform='translate(-50%,-50%) scale(.12) rotate(140deg)';sl.style.opacity='0';
setTimeout(function(){fl.style.transform='rotateX(179deg)';},320);
setTimeout(function(){fl.style.zIndex='0';},1150);
setTimeout(function(){sv.style.transform='translateY(11vh) scale(.95)';},1000);
setTimeout(function(){ht.style.transform='translateY(-64%)';ht.style.opacity='1';},1250);
setTimeout(function(){sb.style.opacity='0';sb.style.visibility='hidden';},3600);
setTimeout(function(){if(sb.parentNode)sb.parentNode.removeChild(sb);},4900);
},{passive:true});
}();

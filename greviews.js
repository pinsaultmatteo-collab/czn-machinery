// Avis Google dynamiques — compteurs + score (toutes pages) + temoignages (home).
(function(){
  var st=document.createElement('style');
  st.textContent='.test-text.clamp{display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden;}.test-more{display:inline-block;margin-top:8px;background:none;border:none;padding:0;color:var(--orange);font-family:var(--f-mono,monospace);font-size:12px;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;}.test-more:hover{text-decoration:underline;}';
  document.head.appendChild(st);
  fetch('/api/reviews/').then(function(r){return r.ok?r.json():null;}).then(function(d){
    if(!d||d.error)return;
    if(d.total!=null){document.querySelectorAll('.js-greviews-count').forEach(function(el){el.textContent=d.total;});}
    if(d.rating!=null){document.querySelectorAll('.js-greviews-score').forEach(function(el){el.textContent=Number(d.rating).toFixed(1);});}
    var grid=document.querySelector('.testimonials-grid');
    var pool=(d.reviews||[]).filter(function(x){return x.rating>=4&&x.text;});pool.sort(function(a,b){var fa=(a.lang==='fr')?0:1,fb=(b.lang==='fr')?0:1;if(fa!==fb)return fa-fb;return (b.publishTime||'').localeCompare(a.publishTime||'');});var revs=pool.slice(0,3);
    if(grid&&revs.length){
      function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
      var star='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      grid.innerHTML=revs.map(function(rv){
        var ini=(rv.author||'?').split(/\s+/).map(function(w){return w[0]||'';}).join('').slice(0,2).toUpperCase();
        return '<article class="testimonial"><div class="test-stars">'+star.repeat(5)+'</div>'+
          '<p class="test-text clamp">« '+esc(rv.text)+' »</p>'+
          '<button class="test-more" type="button" hidden>Lire plus</button>'+
          '<div class="test-author"><div class="test-avatar">'+esc(ini)+'</div>'+
          '<div class="test-info"><div class="test-name">'+esc(rv.author)+'</div>'+
          '<div class="test-role">'+esc(rv.when||'Avis Google')+'</div></div>'+
          '<span class="test-badge">Google</span></div></article>';
      }).join('');
      grid.querySelectorAll('.test-text.clamp').forEach(function(p){
        if(p.scrollHeight-p.clientHeight>4){var b=p.nextElementSibling;if(b&&b.classList.contains('test-more'))b.hidden=false;}
        else{p.classList.remove('clamp');}
      });
      grid.addEventListener('click',function(e){
        var b=e.target.closest?e.target.closest('.test-more'):null;if(!b)return;
        var art=b.closest('.testimonial');var p=art&&art.querySelector('.test-text');if(!p)return;
        var c=p.classList.toggle('clamp');b.textContent=c?'Lire plus':'Lire moins';
      });
    }
  }).catch(function(){});
})();

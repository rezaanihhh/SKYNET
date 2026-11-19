/* KANVAS ANIMASI ATOM */
function initAtomBg(){
  const canvas=$('#atom-bg');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let w=canvas.width=window.innerWidth,h=canvas.height=window.innerHeight;
  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.addEventListener('resize',()=>{w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight});

  const colors=[
    {main:'#38bdf8',glow:'rgba(56,189,248,.3)',light:'#bae6fd'},
    {main:'#a855f7',glow:'rgba(168,85,247,.3)',light:'#e9d5ff'},
    {main:'#818cf8',glow:'rgba(129,140,248,.3)',light:'#c7d2fe'},
    {main:'#60a5fa',glow:'rgba(96,165,250,.3)',light:'#bfdbfe'}
  ];

  const count=Math.max(4,Math.min(7,Math.floor(w/260)));
  const atoms=[];
  for(let i=0;i<count;i++){
    const color=colors[i%colors.length];
    const r=55+Math.random()*50;
    const oc=2+Math.floor(Math.random()*2);
    const orbits=[];
    for(let o=0;o<oc;o++){
      orbits.push({
        tilt:(Math.PI/oc)*o+(Math.random()*.2-.1),
        rx:r*(.85+o*.2),
        ry:r*(.32+o*.08),
        speed:(.014+Math.random()*.016)*(Math.random()<.5?1:-1),
        ang:Math.random()*Math.PI*2,
        es:2.4+Math.random()*1.2,
        ec:color.light
      });
    }
    atoms.push({
      x:Math.random()*w,
      y:Math.random()*h,
      vx:(Math.random()-.5)*.32,
      vy:(Math.random()-.5)*.32,
      nr:5+Math.random()*4,
      rot:Math.random()*Math.PI*2,
      rs:(Math.random()-.5)*.003,
      color,
      orbits
    });
  }

  const dust=[];
  for(let i=0;i<28;i++){
    dust.push({
      x:Math.random()*w,
      y:Math.random()*h,
      vx:(Math.random()-.5)*.22,
      vy:(Math.random()-.5)*.22,
      r:1+Math.random()*1.8,
      a:.15+Math.random()*.25,
      c:colors[i%colors.length].main
    });
  }

  let aid;
  function draw(){
    ctx.clearRect(0,0,w,h);
    
    // Quantum dust
    for(let i=0;i<dust.length;i++){
      const p=dust[i];
      if(!prefersReduced){
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=w;if(p.x>w)p.x=0;
        if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      }
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.c;
      ctx.globalAlpha=p.a;
      ctx.fill();

      for(let j=i+1;j<dust.length;j++){
        const p2=dust[j],dx=p.x-p2.x,dy=p.y-p2.y,dist=Math.hypot(dx,dy);
        if(dist<85){
          ctx.beginPath();
          ctx.moveTo(p.x,p.y);
          ctx.lineTo(p2.x,p2.y);
          ctx.strokeStyle='#818cf8';
          ctx.globalAlpha=(1-dist/85)*.12;
          ctx.lineWidth=.8;
          ctx.stroke();
        }
      }
    }

    // Atoms
    atoms.forEach(a=>{
      if(!prefersReduced){
        a.x+=a.vx;a.y+=a.vy;a.rot+=a.rs;
        const pad=80;
        if(a.x<-pad)a.x=w+pad;if(a.x>w+pad)a.x=-pad;
        if(a.y<-pad)a.y=h+pad;if(a.y>h+pad)a.y=-pad;
      }

      // Nucleus radial glow
      const g=ctx.createRadialGradient(a.x,a.y,0,a.x,a.y,a.nr*4);
      g.addColorStop(0,a.color.light);
      g.addColorStop(.35,a.color.glow);
      g.addColorStop(1,'transparent');
      ctx.beginPath();
      ctx.arc(a.x,a.y,a.nr*4,0,Math.PI*2);
      ctx.fillStyle=g;
      ctx.globalAlpha=.65;
      ctx.fill();

      // Nucleus core
      ctx.beginPath();
      ctx.arc(a.x,a.y,a.nr,0,Math.PI*2);
      ctx.fillStyle=a.color.main;
      ctx.globalAlpha=.9;
      ctx.fill();

      // Orbits & electrons
      a.orbits.forEach(o=>{
        ctx.save();
        ctx.translate(a.x,a.y);
        ctx.rotate(a.rot+o.tilt);

        // Orbit ring
        ctx.beginPath();
        ctx.ellipse(0,0,o.rx,o.ry,0,0,Math.PI*2);
        ctx.strokeStyle=a.color.main;
        ctx.globalAlpha=.2;
        ctx.lineWidth=1.2;
        ctx.stroke();

        if(!prefersReduced)o.ang+=o.speed;
        const ex=o.rx*Math.cos(o.ang),ey=o.ry*Math.sin(o.ang);

        // Trail
        ctx.beginPath();
        const dir=o.speed>=0?-1:1;
        ctx.ellipse(0,0,o.rx,o.ry,0,o.ang+dir*.35,o.ang,o.speed<0);
        ctx.strokeStyle=o.ec;
        ctx.globalAlpha=.45;
        ctx.lineWidth=1.8;
        ctx.stroke();

        // Electron
        ctx.beginPath();
        ctx.arc(ex,ey,o.es,0,Math.PI*2);
        ctx.fillStyle='#ffffff';
        ctx.globalAlpha=.95;
        ctx.fill();

        // Glow halo
        ctx.beginPath();
        ctx.arc(ex,ey,o.es*2.6,0,Math.PI*2);
        ctx.fillStyle=o.ec;
        ctx.globalAlpha=.35;
        ctx.fill();

        ctx.restore();
      });
    });

    ctx.globalAlpha=1;
    aid=requestAnimationFrame(draw);
  }

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(aid)}
    else{aid=requestAnimationFrame(draw)}
  });
  aid=requestAnimationFrame(draw);
}

/* FADE-IN SCROLLING */
function initScrollReveal(){
  const els=$$('section, .card, .win, .band, blockquote, details');
  els.forEach(el=>el.classList.add('reveal'));
  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('revealed'));
    return;
  }
  const obs=new IntersectionObserver((entries,o)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        o.unobserve(e.target);
      }
    });
  },{rootMargin:'0px 0px -40px 0px',threshold:.08});
  els.forEach(el=>obs.observe(el));
}

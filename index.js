///////////////////////////////////// PARALLAX

let scene = document.getElementById('parallax-lens');
let parallax = new Parallax(scene);

//////////////////////// HIDDEN LAYERS BEFORE LENS PLAY

let hiddenLensLayers = document.getElementById('parallax-lens');

///////////////////////////////////// LENS ANIM

let lensAnim = bodymovin.loadAnimation({
    container: document.getElementById('lensAnim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json',
  })

document.getElementById('lensAnim').addEventListener('click', ()=> {
  lensAnim.play();
  hiddenLensLayers.children[1].classList.add('visible-elements');
  hiddenLensLayers.children[2].classList.add('visible-elements');
  hiddenLensLayers.children[3].classList.add('visible-elements');
});

///////////////////////////////////// LOGO CLICK AND HOMEPAGE SHOW

let logo = document.getElementById('logo');

lensAnim.addEventListener('complete', ()=> {
  document.getElementById("lensAnim").style.pointerEvents = "none";
    });

logo.addEventListener('click', ()=> {
  logo.classList.add('filtered');

    setTimeout(()=> {
      let windowClosure = document.getElementById('parallaxWindow');
      windowClosure.classList.add('invisible-elements');
      document.getElementById("homepage").style.display = "grid";
  
        setTimeout(()=> {
          windowClosure.style.display = "none";
          windowClosure.style.height = "100em";
        }, 2000);
    }, 1000);
  });

////////////////////////////////// CATEGORY CONTAINERS ITERATION

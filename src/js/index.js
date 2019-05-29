'use strict';

let scene, sceneLight, cam, renderer;

function initScene() {
  scene = new THREE.Scene();

  sceneLight = new THREE.DirectionalLight(0xffffff,0.5);
  sceneLight.position.set(0,0,1);
  scene.add(sceneLight);

  cam = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
  cam.position.z = 1000;
  scene.add(cam);

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.render(scene, cam);
  particleSetup();
}

function particleSetup() {
  let loader = new THREE.TextureLoader();

  loader.load('smoke.png', function (texture) {
    let portalGeo = new THREE.PlaneBufferGeometry(350, 350);
    let portalMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true
    });

    let particle = new THREE.Mesh(portalGeo, portalMaterial);
    particle.position.set(2, 2);
    scene.add(particle);

    renderer.render(scene, cam);
  });
}

initScene();

var mesh, renderer, scene, camera, controls;

function init() {
  // renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x343a40);
  document.body.appendChild(renderer.domElement);

  // scene
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(20, 20, 20);
  scene.add(camera); // required, since adding light as child of camera

  // controls
  controls = new THREE.OrbitControls(camera);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 2;

  // ambient
  scene.add(new THREE.AmbientLight(0x333333));

  // light
  var light = new THREE.PointLight(0xffffff, 0.8);
  camera.add(light);

  // porta 1
  var porta = new THREE.BoxGeometry(2, 5, 0.1);
  // materiale
  var legno = new THREE.MeshPhongMaterial({
    color: "brown"
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(porta, legno);
  mesh.position.set(-8.5, -2.5, 20); // x,y,z
  scene.add(mesh);
  
  // porta 2
  var porta = new THREE.BoxGeometry(0.5, 5, 2);
  // materiale
  var legno = new THREE.MeshPhongMaterial({
    color: "brown"
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(porta, legno);
  mesh.position.set(-6.5, -2.5, 16); // x,y,z
  scene.add(mesh);
  
  // porta 3
  var porta = new THREE.BoxGeometry(7, 5, 0.5);
  // materiale
  var legno = new THREE.MeshPhongMaterial({
    color: "brown"
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(porta, legno);
  mesh.position.set(-3, -2.5, -6); // x,y,z
  scene.add(mesh);
  
  // parete 1
  var parete = new THREE.BoxGeometry(0.3, 10, 10);
  // materiale
  var mattone = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(parete, mattone);
  mesh.position.set(-6.5, 0, 15); // x,y,z
  scene.add(mesh);
  
  // parete 2
  var parete = new THREE.BoxGeometry(16.7, 10, 0.3);
  // materiale
  var mattone = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(parete, mattone);
  mesh.position.set(1.7, 0, 10); // x,y,z
  scene.add(mesh);
  
  // parete 3
  var parete = new THREE.BoxGeometry(20, 10, 0.3);
  // materiale
  var mattone = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(parete, mattone);
  mesh.position.set(0, 0, -6); // x,y,z
  scene.add(mesh);
  
  // letto
  var geometry = new THREE.BoxGeometry(8, 2, 6);
  // materiale
  var material1 = new THREE.MeshPhongMaterial({
    color: "lightgreen"
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(geometry, material1);
  mesh.position.set(6, -4, -14); // x,y,z
  scene.add(mesh);
  
  // doccia
  var geometry = new THREE.BoxGeometry(2.5, 7, 3);
  // materiale
  var material1 = new THREE.MeshPhongMaterial({
    color: "cyan"
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(geometry, material1);
  mesh.position.set(8.75, -1.5, 18.5);
  scene.add(mesh);
  
  // parete doccia
  var parete = new THREE.BoxGeometry(0.5, 7, 3);
  // materiale
  var mattone = new THREE.MeshPhongMaterial({
    color: 0xffffff
  });
  // posizioni spaziali
  mesh = new THREE.Mesh(parete, mattone);
  mesh.position.set(7.25, -1.5, 18.5); // x,y,z
  scene.add(mesh);
  
  // stanza senza pareti
  var stanza = new THREE.BoxGeometry(20, 10, 40);
  // materiale
  var materiale = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1
  });
  // senza posizione = centro!
  mesh = new THREE.Mesh(stanza, materiale);
  scene.add(mesh);
 
  // materiale pareti stanza
  var materiale = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: false,
    side: THREE.BackSide
  });
  // senza posizione = centro!
  mesh = new THREE.Mesh(stanza, materiale);
  scene.add(mesh);
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

init();
animate();

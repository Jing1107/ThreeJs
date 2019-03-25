function createRenderer() {
  // Where will the user see the 3D world
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.Height);
  renderer.setClearColor("#16161d"); // Eigengrau

}

createRenderer();

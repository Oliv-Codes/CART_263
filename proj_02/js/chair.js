import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
//move camera
camera.position.z = 5
camera.position.y = 3
camera.rotation.x = -.05
scene.add(camera)


//Lights
const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)
ambientLight.color = new THREE.Color(0x0000CC)
ambientLight.intensity = 1.9;
const spotLight = new THREE.SpotLight(0x78ff00, 6.6, 10, Math.PI * 0.5, .01, 3)
spotLight.position.set(0, 2, 5)
scene.add(spotLight)


const material = new THREE.MeshStandardMaterial({}) 

// Load FBX
const fbxLoader = new FBXLoader()
fbxLoader.load('assets/chair_bottom.fbx', (object) => {
    object.scale.set(.05, .05, .05)
    scene.add(object)
})

fbxLoader.load('assets/chair_top.fbx', (object) => {
    object.scale.set(.05, .05, .05)
    scene.add(object)
})

//add planes
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = -Math.PI * 0.5
scene.add(plane)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera);

function animate() {
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate);

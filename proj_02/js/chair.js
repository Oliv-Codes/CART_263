import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
let chairTop = null;

let spinSpeed = 0.01;   // default speed

window.addEventListener('mousemove', (event) => {
    // Normalize mouse Y from 0 (top) to 1 (bottom)
    const normalizedY = event.clientY / sizes.height;

    // Invert it so higher mouse = faster spin
    const inverted = 1 - normalizedY;

    // Map to a speed range
    spinSpeed = inverted * 0.1;   // adjust 0.1 for max speed
});

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
camera.position.y = 4
camera.rotation.x = -.5

const fbxLoader = new FBXLoader()


//Lights
const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)
ambientLight.color = new THREE.Color('#090a3a')
ambientLight.intensity = 1.9;
const spotLight = new THREE.SpotLight('#697768', 6.6, 10, Math.PI * 0.5, .01, 3)
spotLight.position.set(1, 3, .5)
spotLight.target.position.set(0, 1, -2)
scene.add(spotLight)
scene.add(spotLight.target)

const chairMat = new THREE.MeshStandardMaterial({
            color: '#2b1919'
        });

// Load FBX bottom
fbxLoader.load('assets/chair_bottom.fbx', (object) => {
    object.scale.set(.05, .05, .05);

    object.traverse((child) => {
        if (child.isMesh) {
            child.material = chairMat;
        }
    });

    scene.add(object);
});

// Load FBX top
fbxLoader.load('assets/chair_top.fbx', (object) => {
    object.scale.set(.05, .05, .05);

    object.traverse((child) => {
        if (child.isMesh) {
            child.material = chairMat;
        }
    });
    chairTop = object;
    scene.add(object);
});

//add planes
const disc = new THREE.CircleGeometry(3, 14);
const discMat = new THREE.MeshStandardMaterial({
            color: '#ffffff'
        });
        
const discMesh = new THREE.Mesh(disc, discMat);
discMesh.rotation.x = -Math.PI / 2;
scene.add(discMesh)

const planeGeo = new THREE.PlaneGeometry(80, 30,);
const planeMat = new THREE.MeshStandardMaterial({
    color: '#ff00f2'
});

const plane = new THREE.Mesh(planeGeo, planeMat);

plane.position.set(0, -2, -4);
scene.add(plane);


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera);

function animate() {
    if (chairTop) {
        chairTop.rotation.y += spinSpeed;
    }
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate);

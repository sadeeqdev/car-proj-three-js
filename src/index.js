import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
camera.rotation.y = 45/180*Math.PI
camera.position.x=800
camera.position.y=100
camera.position.z=1000

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', renderer)

const hlight = new THREE.AmbientLight(0x404040, 100)
scene.add(hlight)

const directionalLight = new THREE.DirectionalLight(0Xffffff,100);
directionalLight.position.set(0,1,0)
directionalLight.castShadow = true;
scene.add(directionalLight);

const light = new THREE.PointLight(0xc4c4c4,10)
light.position.set(0,300,500)
scene.add(light)


const light2 = new THREE.PointLight(0xc4c4c4,10)
light2.position.set(500,100,0)
scene.add(light2)


const light3 = new THREE.PointLight(0xc4c4c4,10)
light3.position.set(0,100,-500)
scene.add(light3)

const light4 = new THREE.PointLight(0xc4c4c4,10)
light4.position.set(-500,300,0)
scene.add(light4)

const loader = new GLTFLoader();
loader.load( '/src/assets/models/scene.gltf', function ( gltf ) {
	const myObject = gltf.scene.children[0]
	myObject.scale.set(0.5,0.5,0.5)
	scene.add( gltf.scene) && console.log("Added object");
	animate()

}, undefined, function ( error ) {

	console.error( error );

} );

const animate = () => {
	renderer.render( scene, camera );
	requestAnimationFrame(animate)
}


// Option 1: Import the entire three.js core library.
import * as THREE from 'three';
import { Plane } from './models/Plane.class';
import { TestCube } from './models/TestCube.class';
import { Player } from './models/Player.class';
import { BlockSpawner } from './models/BlockSpawner.class';
import { Cube } from './models/Cube.class';
import { Building } from './models/Building.class';
import * as constants from './constants.js';

// Lista dos objetos ativos. Atualizada antes do render.
window.objects = [];

// Objetos a serem construídos via parâmetro
window.buildObjects = [];

// Objetos a serem construídos via parâmetro
window.pickableEntities = [];

// Lista de elementos necessários para os controles funcionarem.
window.players = [];

// Lista das construções
window.buildings = [];

// Lista de cores por andar do edifício
window.colors = {1: 0xff0000, 2: 0x00ff00, 3: 0x0000ff};

const scene = new THREE.Scene();
window.scene = scene;
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var ground = new Plane({width: 100, depth: 100}, {x: 0, y: 0, z: 0}, 0xffffff);
ground.addToScene(scene);

var Player1 = new Player({posx: -10, posy: -2, posz: 0.5}, 0x000000);
var Player2 = new Player({posx:  12, posy: -2, posz: 0.5}, 0xffffff);
Player1.addToScene(scene);
Player2.addToScene(scene);

window.players[1] = Player1;
window.players[2] = Player2;
window.players[3] = camera;

camera.position.y = -25;
camera.position.z = 20;
camera.rotateX(0.75);

// camera.position.y = -5;
// camera.position.z = 4;
// camera.rotateX(0.75);

const light = new THREE.PointLight( 0xffffff, 1.5, 50 );
light.position.set( 0, -15, 25 );
light.castShadow = true; // default false

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default

scene.add( light );

// const helper = new THREE.CameraHelper( light.shadow.camera );
// scene.add( helper );

const building1 = new Building({posx: -12, posy: 0});
const building2 = new Building({posx: 10, posy: 0});
window.buildings.unshift(building1, building2);
const blockSpawner = new BlockSpawner({ posx: -11, posy: -16, posz: 0.5 }, { width: 24, depth: 12 });

window.buildObjects.forEach(object => {
  // console.log(object);
  scene.add(object);
});

// console.log(window.objects);
// console.log(window.pickableEntities);
// console.log(window.buildings);

function animate() {
  requestAnimationFrame(animate);

  window.objects.forEach(object => {
    object.update();
  });

  renderer.render(scene, camera);
}
animate();
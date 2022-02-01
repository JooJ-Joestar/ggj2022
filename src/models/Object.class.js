import * as THREE from 'three';
import {Object3D} from 'three';

export class Object extends Object3D{
    geometry = null;
    material = null;
    texture = null;
    object = null;

    accelX = 0;
    accelY = 0;

  constructor(){
    super();
    this.castShadow = true; //default is false
    this.receiveShadow = true; //default  
  }

  update(){
    this.object.position.y += this.accelX;
    this.object.position.x -= this.accelY;
  }

  addToScene(scene){
    scene.add(this.object);
  }

  test(){
    console.log('Hello world!');
  }
}
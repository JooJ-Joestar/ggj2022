import * as THREE from 'three';
import {Object} from './Object.class.js';
import Grass from '../resources/img/grass.jpg';

export class Plane extends Object {
    constructor(size = {width: 10, depth: 10}, pos = {x: 0, y: 0, z: 0}, color){
        console.log('=================' + color);
        super();
        this.castShadow = false;
        this.geometry = new THREE.PlaneGeometry(size.width, size.depth);

        this.texture = new THREE.TextureLoader().load( Grass );
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.repeat.set( 8, 8 );

        this.material = new THREE.MeshStandardMaterial( { color: color/*, map: this.texture*/ } );
        this.object = new THREE.Mesh( this.geometry, this.material );

        this.object.position.x = pos.x;
        this.object.position.y = pos.y;
        this.object.position.z = pos.z;

        window.objects.unshift(this);
    }

    update(){
        // this.object.rotation.x += 0.01;
        // this.object.rotation.y += 0.01;
    }
  }
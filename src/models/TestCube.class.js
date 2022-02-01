import * as THREE from 'three';
import {Object} from './Object.class.js';

export class TestCube extends Object {

    constructor(pos = null, color = 0x00ff00){
        super();
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshStandardMaterial( { color: color } );
        this.object = new THREE.Mesh( this.geometry, this.material );

        this.object.position.x += pos.posx;
        this.object.position.y += pos.posy;
        this.object.position.z += pos.posz;

        window.objects.unshift(this);
    }
    
    update(){
        Object.prototype.update.call(this);
        this.object.rotation.x += 0.01;
        this.object.rotation.y += 0.01;
    }
  }
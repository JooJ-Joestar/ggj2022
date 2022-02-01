import * as THREE from 'three';
import { Object } from './Object.class.js';

export class Cube extends Object {
  pos = { posx: 0, posy: 0, posz: 0 };
  size = { width: 1, height: 1, depth: 1 };
  disabled = false;
  lineIndex = null;

  constructor(size, pos, color = 0x00ff00) {
    super();
    if (pos.posx) this.pos.posx = pos.posx;
    if (pos.posy) this.pos.posy = pos.posy;
    if (pos.posz) this.pos.posz = pos.posz;

    if (size.width) this.size.width = size.width;
    if (size.height) this.size.height = size.height;
    if (size.depth) this.size.depth = size.depth;

    // console.log(this.size);  

    this.geometry = new THREE.BoxGeometry(this.size.width, this.size.height, this.size.depth);
    this.material = new THREE.MeshStandardMaterial({ color: color });
    this.object = new THREE.Mesh(this.geometry, this.material);

    this.object.position.x = this.pos.posx;
    this.object.position.y = this.pos.posy;
    this.object.position.z = this.pos.posz;

    window.objects.unshift(this);
  }
}
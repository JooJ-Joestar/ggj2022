import * as THREE from 'three';
import { Object } from './Object.class.js';
import Grass from '../resources/img/grass.jpg';
import { Cube } from './Cube.class.js';
import { Plane } from './Plane.class.js';

export class Building {
  blocks = [];
  pos = {posx: 0, posy: 0, posz: 0};
  deliveryPos = {xmin: 0, xmax: 0, ymin: 0, ymax: 0};
  size = {width: 3, height: 3};
  cubeSize = {width: 1, height: 1, depth: 1};
  ownership = null;

  constructor(pos, size, ownership) {
    if(pos.posx) this.pos.posx = pos.posx;
    if(pos.posy) this.pos.posy = pos.posy;

    for(var y = 1; y <= this.size.height; y++){
      var numDisabled = Math.ceil((Math.random() + 0.0000001) * 3);
      // console.log(numDisabled);
      for(var x = 1; x <= this.size.width; x++){
        var cube = new Cube(
          {'width': this.cubeSize.width, 'height': this.cubeSize.height, 'depth': this.cubeSize.depth},
          {
            'posx': this.pos.posx + (x * this.cubeSize.width),
            'posy': this.pos.posy,
            'posz': this.pos.posz + (y * this.cubeSize.height) - (this.cubeSize.height / 2)
          },
          // (numDisabled === x ? 0x000000 : window.colors[y])
          window.colors[y]
        );
        if(numDisabled === x){
          cube.material.color.setHex(0x000000);
          cube.lineIndex = y;
        }
        window.buildObjects.unshift(cube.object);
      }
    }
    this.setDeliveryPos();
  }

  setDeliveryPos(){
    var planeX = this.pos.posx + 2;
    var planeY = this.pos.posy - 1;
    var planeWidth = this.size.width;
    var planeDepth = 1;
    var plane = new Plane({width: planeWidth, depth: planeDepth}, {x: planeX, y: planeY, z: this.pos.posz + 0.05}, 0x00ff00);
    plane.addToScene(window.scene);

    this.deliveryPos = {
      xmin: this.pos.posx,
      xmax: this.pos.posx + planeWidth - 1,
      ymin: planeY,
      ymax: planeY + planeDepth,
    }
  }

  update() {
    // this.object.rotation.x += 0.01;
    // this.object.rotation.y += 0.01;
  }
}
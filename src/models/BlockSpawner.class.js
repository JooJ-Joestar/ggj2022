import * as THREE from 'three';
import { Cube } from './Cube.class.js';
import { Plane } from './Plane.class.js';

export class BlockSpawner {
  blocks = [];
  pos = { posx: 0, posy: 0, posz: 0.5 };
  size = { width: 24, depth: 12 };
  cubeSize = { width: 1, height: 1, depth: 1 };
  amount = 15;
  refreshEveryNSeconds = 10;

  constructor(pos, size, color = 0xff0000) {
    this.pos = pos;
    this.size = size;
    // var plane = new Plane({width: this.size.width, depth: this.size.depth}, {x: this.pos.posx + this.size.width / 2, y: this.pos.posy + this.size.depth / 2, z: this.pos.posz}, color);
    // plane.addToScene(window.scene);

    for (var i = 1; i <= this.amount; i++) {
      console.log(i);
      var x = this.pos.posx + Math.round(Math.random() * this.size.width);
      var y = this.pos.posy + Math.round(Math.random() * this.size.depth);
      var colorIndex = Math.ceil(Math.random() * 3);
      var cube = new Cube({'width': this.cubeSize.width, 'height': this.cubeSize.height, 'depth': this.cubeSize.depth},{'posx': x,'posy': y,'posz': this.pos.posz}, window.colors[colorIndex]);
      cube.missingIndex = colorIndex;
      window.buildObjects.unshift(cube.object);
      window.pickableEntities.unshift(cube);
    }
  }

  update() {
    // this.object.rotation.x += 0.01;
    // this.object.rotation.y += 0.01;
  }
}
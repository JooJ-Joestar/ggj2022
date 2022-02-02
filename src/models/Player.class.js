import * as THREE from 'three';
import { TestCube } from './TestCube.class.js';

export class Player extends TestCube {
  corOriginal = null;
  corObjeto = null;
  objetoCarregado = null;

  constructor(pos = null, color = 0x00ff00) {
    super(pos, color);
    this.corOriginal = color;

    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshStandardMaterial({ color: color });
    this.object = new THREE.Mesh(this.geometry, this.material);

    this.object.position.x += pos.posx;
    this.object.position.y += pos.posy;
    this.object.position.z += pos.posz;

    window.objects.unshift(this);
  }

  update() {
    TestCube.prototype.update.call(this);
    this.testCollisions();
  }

  testCollisions() {
    this.collectCube();
    this.depositCube();
  }

  collectCube(){
    window.pickableEntities.forEach((entity, key) => {
      if(this.objetoCarregado != null) return;
      if(Math.round(entity.object.position.x) == Math.round(this.object.position.x) && Math.round(entity.object.position.y) == Math.round(this.object.position.y)){
        this.objetoCarregado = entity;
        window.scene.remove(entity.object);
        window.pickableEntities.splice(key, 1);
        console.log(this.objetoCarregado);
      }
    });
  }

  depositCube(){
    if(this.objetoCarregado == null){
      // console.log('Falhou 1');
      return;
    }
    
    window.buildings.forEach((building, key) => {
      if(this.objetoCarregado == null) return; // Necessário checar aqui e antes do foreach, por questão de lógica. Estou com preguiça de explicar, qualquer coisa me pergunte no meu email jorge@jooj.dev

      var playerX = this.object.position.x;
      var playerY = this.object.position.y;
      
      if(playerX > building.deliveryPos.xmin && playerX < building.deliveryPos.xmax && playerY > building.deliveryPos.ymin && playerY < building.deliveryPos.ymax){
        building.blocks.forEach(block => {
          if(block.missingIndex == null) return;
          if(block.missingIndex != this.objetoCarregado.object.missingIndex) return;
          block.material.color.sethex(window.colors[block.missingIndex]);
          this.objetoCarregado = null;
          console.log('Cubo depositado');
        });
      }
    });
  }
}
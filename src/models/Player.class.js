import * as THREE from 'three';
import { TestCube } from './TestCube.class.js';
import { Cube } from './Cube.class.js';

export class Player extends TestCube {
  corOriginal = null;
  corObjeto = null;
  objetoCarregado = null;
  lutando = false;

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

  dropCube(){
    if(!this.objetoCarregado) return;
    window.pickableEntities.unshift(this.objetoCarregado);
    this.objetoCarregado.addToScene(window.scene);
    this.objetoCarregado = null;
  }

  depositCube(){
    if(this.objetoCarregado == null){
      // console.log('Falhou 1');
      return;
    }
    
    window.buildings.forEach((building, key) => {
      if(!this.objetoCarregado == null) return; // Necessário checar aqui e antes do foreach, por questão de lógica. Estou com preguiça de explicar, qualquer coisa me pergunte no meu email jorge@jooj.dev

      var playerX = this.object.position.x;
      var playerY = this.object.position.y;
      
      if(playerX > building.deliveryPos.xmin && playerX < building.deliveryPos.xmax && playerY > building.deliveryPos.ymin && playerY < building.deliveryPos.ymax){
        building.blocks.forEach(block => {
          if(!this.objetoCarregado || block.missingIndex == null) return;
          if(block.missingIndex != this.objetoCarregado.missingIndex) return;
          block.material.color.setHex(window.colors[block.missingIndex]);
          this.objetoCarregado = null;
          block.missingIndex = null;
        });
      }
    });
  }

  static verificarSeLutando(){
    if(window.players[1].lutando == true || window.players[2].lutando == true){
      return;
    }

    var player1X = Math.round(window.players[1].object.position.x);
    var player1Y = Math.round(window.players[1].object.position.y);

    var player2X = Math.round(window.players[2].object.position.x);
    var player2Y = Math.round(window.players[2].object.position.y);

    if(player1X == player2X && player1Y == player2Y){
      window.players[1].lutando = true;
      window.players[1].accelX = 0;
      window.players[1].accelY = 0;

      window.players[2].lutando = true;
      window.players[2].accelX = 0;
      window.players[2].accelY = 0;

      document.getElementById("player-1-combat-bar").style.width = "50%";
      document.getElementById("player-2-combat-bar").style.width = "50%";
      document.getElementById("combat-power-bar").style.display = "block";
    }
  }
}
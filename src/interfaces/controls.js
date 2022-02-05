const KEY_PLAYER1 = 1;
const KEY_PLAYER2 = 2;
const KEY_CAMERA = 3;

document.addEventListener("keypress", function (event) {
  const increment = 0.05;
  const keyName = event.key;
  // console.log('keydown event\n\n' + 'key: ' + keyName);

  if(!window.players[1].lutando){
    switch (keyName) {
      case 'w':
        window.players[KEY_PLAYER1].accelX = increment;
      break;
      
      case 'a':
        window.players[KEY_PLAYER1].accelY = increment;
      break;
        
      case 's':
        window.players[KEY_PLAYER1].accelX = -increment;
      break;

      case 'd':
        window.players[KEY_PLAYER1].accelY = -increment;
      break;

      case 'x':
        window.players[KEY_PLAYER1].dropCube();
      break;
    }
  }
      
  if(!window.players[2].lutando){
    switch (keyName) {
      // PLAYER2
      case 'i':
        window.players[KEY_PLAYER2].accelX = increment;
      break;
      
      case 'j':
        window.players[KEY_PLAYER2].accelY = increment;
      break;
        
      case 'k':
        window.players[KEY_PLAYER2].accelX = -increment;
      break;
        
      case 'l':
        window.players[KEY_PLAYER2].accelY = -increment;
      break;
    }
  }
});

document.addEventListener("keyup", function (event) {
  const keyName = event.key;
  switch (keyName) {
    case 'w': case 's':
      window.players[KEY_PLAYER1].accelX = 0;
    break;
    
    case 'a': case 'd':
      window.players[KEY_PLAYER1].accelY = 0;
    break;
    
    case 'i': case 'k':
      window.players[KEY_PLAYER2].accelX = 0;
    break;
    
    case 'j': case 'l':
      window.players[KEY_PLAYER2].accelY = 0;
    break;
  }
});


// ************************* Camera *************************
document.addEventListener("keydown", function (event) {
  const increment = 0.5;
  const keyName = event.key;
  // console.log('keydown event\n\n' + 'key: ' + keyName);

  // console.log(event);
  switch (keyName) {
    case 't':
      window.players[KEY_CAMERA].position.y += increment;
    break;
    
    case 'f':
      window.players[KEY_CAMERA].position.x -= increment;
    break;
      
    case 'g':
      window.players[KEY_CAMERA].position.y += -increment;
    break;
      
    case 'h':
      window.players[KEY_CAMERA].position.x -= -increment;
    break;

    case 'r':
      window.players[KEY_CAMERA].rotateX(-0.05);
    break;

    case 'y':
      window.players[KEY_CAMERA].rotateX(0.05);
    break;

    case '-':
      window.players[KEY_CAMERA].position.z -= increment;
    break;

    case '=':
      window.players[KEY_CAMERA].position.z += increment;
    break;
  }
});

document.addEventListener("keyup", function (event) {
  const keyName = event.key;
  switch (keyName) {
    case 't': case 'g':
      window.players[KEY_PLAYER1].accelX = 0;
    break;
    
    case 'f': case 'h':
      window.players[KEY_PLAYER1].accelY = 0;
    break;
  }
});
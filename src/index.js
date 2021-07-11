import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
// import Player from './assets/Player.png';
//
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
//
// const gameW = canvas.width;
// const gameH = canvas.height;
// const spriteW = 48;
// const spriteH = 48;
// const shots = 3;
//
// let cycle = 0;
// let direction = 0;
// let bottomPressed = false;
// let upPressed = false;
// let leftPressed = false;
// let rightPressed = false;
// let isWalk = false;
// let pY = (gameH - spriteH) / 2;
// let pX = (gameW - spriteW) / 2;
//
// function keyHendler(e) {
//   const isKeyDown = e.type === 'keydown';
//   switch (e.key) {
//     case 'Down':
//     case 'ArrowDown':
//       bottomPressed = isKeyDown;
//       break;
//     case 'Up':
//     case 'ArrowUp':
//       upPressed = isKeyDown;
//       break;
//     case 'Left':
//     case 'ArrowLeft':
//       leftPressed = isKeyDown;
//       break;
//     case 'Right':
//     case 'ArrowRight':
//       rightPressed = isKeyDown;
//       break;
//     default:
//       bottomPressed = false;
//       upPressed = false;
//       leftPressed = false;
//       rightPressed = false;
//   }
//   isWalk = bottomPressed || upPressed || leftPressed || rightPressed;
// }
//
// document.addEventListener('keydown', keyHendler);
// document.addEventListener('keyup', keyHendler);
//
// const imgPlayer = document.createElement('img');
// imgPlayer.src = Player;
//
// const walkPlayer = () => {
//   if (isWalk) {
//     if (bottomPressed) {
//       direction = 0;
//       pY = pY + 10 > gameH - spriteH ? gameH - spriteH : pY + 10;
//     } else if (upPressed) {
//       direction = 3;
//       pY = pY - 10 < 0 ? 0 : pY - 10;
//     } else if (leftPressed) {
//       direction = 1;
//       pX = pX - 10 < 0 ? 0 : pX - 10;
//     } else if (rightPressed) {
//       direction = 2;
//       pX = pX + 10 > gameW - spriteW ? gameW - spriteW : pX + 10;
//     }
//     cycle = (cycle + 1) % shots;
//   }
//   ctx.clearRect(0, 0, gameW, gameH);
//   ctx.drawImage(imgPlayer, cycle * spriteW, direction * spriteH, spriteW, spriteH, pX, pY, spriteW, spriteH);
// };
//
// imgPlayer.addEventListener('load', () => {
//   setInterval(walkPlayer, 120);
// });

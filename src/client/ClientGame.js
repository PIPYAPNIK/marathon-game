import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.world = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.world.init();
      this.engine.on('render', (_, time) => {
        this.world.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keyDown) => this.playerMove(keyDown, -1, 0),
      ArrowRight: (keyDown) => this.playerMove(keyDown, 1, 0),
      ArrowUp: (keyDown) => this.playerMove(keyDown, 0, -1),
      ArrowDown: (keyDown) => this.playerMove(keyDown, 0, 1),
    });
  }

  playerMove(keyDown, dcol, drow) {
    if (keyDown) {
      this.player.moveByCellCoord(dcol, drow, (cell) => cell.findObjectsByType('grass').length);
    }
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;

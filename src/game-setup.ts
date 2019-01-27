import * as Phaser from 'phaser';

export type GameScene = typeof Phaser.Scene;

export interface IGameSetup {
  width: number;
  height: number;
}
export function runGame(size: IGameSetup, initialScenes: GameScene[]): Phaser.Game {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: size.width,
    height: size.height,
    scene: initialScenes
  });

  return game;
}

import * as Phaser from 'phaser';

export class ExampleScene extends Phaser.Scene {
  constructor(config: Phaser.Scenes.Settings.Config) {
    super(config)
  }

  preload() {
    this.load.image('arrow', 'static/arrow.png');
  }

  create() {
    const arrow = this.add.image(400, 150, 'arrow');

    const tweenConfig = {
      targets: arrow,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    }

    this.tweens.add(tweenConfig);
  }
}

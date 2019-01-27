import { runGame, IGameSetup, GameScene } from './game-setup';
import { ExampleScene } from './scenes/example/example.scene';
import './style.css';

declare var PRODUCTION: boolean;

const initialScenes: GameScene[] = [
  ExampleScene
];

const setup: IGameSetup = {
  width: 800,
  height: 600
};

if (PRODUCTION) {
  // setup PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    });
  }
}

runGame(setup, initialScenes);

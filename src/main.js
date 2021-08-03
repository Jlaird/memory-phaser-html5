import Phaser from 'phaser'

import game from './scenes/game'

import Preloader from './scenes/preload'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Preloader, game]
}

export default new Phaser.Game(config)

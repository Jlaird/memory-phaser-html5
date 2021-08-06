import Phaser from 'phaser'

import Game from './scenes/Game'

import Preloader from './scenes/Preloader'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#cccccc',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [Preloader, Game]
}

export default new Phaser.Game(config)

import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
	{
        this.load.spritesheet('sokoban', 'https://raw.githubusercontent.com/Jlaird/memory-phaser-html5/master/public/textures/sokoban_tilesheet.png', {
            frameWidth: 64
        })

		this.load.image('bear', 'https://raw.githubusercontent.com/Jlaird/memory-phaser-html5/master/public/textures/bear.png')
		this.load.image('chicken', 'https://raw.githubusercontent.com/Jlaird/memory-phaser-html5/master/public/textures/chicken.png')
		this.load.image('duck', 'https://raw.githubusercontent.com/Jlaird/memory-phaser-html5/master/public/textures/duck.png')
		this.load.image('parrot', 'https://raw.githubusercontent.com/Jlaird/memory-phaser-html5/master/public/textures/parrot.png')
		this.load.image('penguin', 'https://raw.githubusercontent.com/Jlaird/memory-phaser-html5/master/public/textures/penguin.png')
	}

	create()
	{
		this.anims.create({
			key: 'down-walk',
			frames: this.anims.generateFrameNumbers('sokoban', { start: 52, end: 54 }),
			frameRate: 10,
			repeat: -1
		})
	
		this.anims.create({
			key: 'up-walk',
			frames: this.anims.generateFrameNumbers('sokoban', { start: 55, end: 57 }),
			frameRate: 10,
			repeat: -1
		})
	
		this.anims.create({
			key: 'left-walk',
			frames: this.anims.generateFrameNumbers('sokoban', { start: 81, end: 83 }),
			frameRate: 10,
			repeat: -1
		})
	
		this.anims.create({
			key: 'right-walk',
			frames: this.anims.generateFrameNumbers('sokoban', { start: 78, end: 80 }),
			frameRate: 10,
			repeat: -1
		})

        this.scene.start('game')
	}
	
}
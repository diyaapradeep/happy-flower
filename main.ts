let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 a a a 3 3 3 a a a 9 9 9 9 
9 9 9 a a a 3 3 3 a a a 9 9 9 9 
9 9 9 a a a 3 3 3 a a a 9 9 9 9 
9 9 9 3 3 3 5 5 5 3 3 3 9 9 9 9 
9 9 9 3 3 3 5 5 5 3 3 3 9 9 9 9 
9 9 9 3 3 3 5 5 5 3 3 3 9 9 9 9 
9 9 9 a a a 3 3 3 a a a 9 9 9 9 
9 9 9 a a a 3 3 3 a a a 9 9 9 9 
9 9 9 a a a 3 3 3 a a a 9 9 9 9 
9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 
9 9 9 9 9 7 7 7 7 7 9 9 9 9 9 9 
9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 f f 9 9 9 9 9 9 9 9 9 9 
9 9 9 5 5 5 5 9 9 9 9 9 9 9 9 9 
9 9 9 f f f f 9 9 9 9 9 9 9 9 9 
9 9 9 5 5 5 5 9 9 9 9 9 9 9 9 9 
9 9 9 f f f f 9 9 9 9 9 9 9 9 9 
9 9 9 5 5 5 5 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, mySprite, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    mySprite.lifespan = 3000
    if (true) {
        mySprite.vx = 0
        projectile.image.flipX()
    }
})

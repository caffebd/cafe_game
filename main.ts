namespace SpriteKind {
    export const customer = SpriteKind.create()
}
function customerAEntrance () {
    customerAText()
    customerA = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.customer)
    do_CustomerAWalkAnim()
    customerA.setPosition(-20, 117)
    for (let index = 0; index < 20; index++) {
        customerA.x += 4
        customerA.y += -4
        pause(75)
    }
    pause(200)
    customerAOrder()
}
function do_CustomerAWalkAnim () {
    animation.runImageAnimation(
    customerA,
    assets.animation`customerARight`,
    100,
    true
    )
}
function customerAOrder () {
    animation.stopAnimation(animation.AnimationTypes.All, customerA)
    for (let index = 0; index <= customerAOrderList.length; index++) {
        customerA.sayText(customerAOrderList[index])
        pause(2000)
    }
    customerAToTable()
}
function customerAText () {
    customerAOrderList = [
    "I would like...",
    "One Mango Juice",
    "One Singara",
    "One Brownie"
    ]
}
function customerAToTable () {
    do_CustomerAWalkAnim()
    for (let index = 0; index < 20; index++) {
        customerA.x += 3
        customerA.y += 3
        pause(75)
    }
    animation.stopAnimation(animation.AnimationTypes.All, customerA)
}
let customerAOrderList: string[] = []
let customerA: Sprite = null
scene.setBackgroundColor(9)
let counter = sprites.create(img`
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `, SpriteKind.Player)
counter.setPosition(35, 28)
let tableA = sprites.create(img`
    ................................
    ................................
    ................................
    ...........777777777............
    .........7777777777777..........
    ........777777777777777.........
    .......77777777777777777........
    ......7777777777777777777.......
    .....777777777777777777777......
    .....777777777777777777777......
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    ....77777777777777777777777.....
    .....777777777777777777777......
    .....777777777777777777777......
    ......7777777777777777777.......
    .......77777777777777777........
    ........777777777777777.........
    .........7777777777777..........
    ...........777777777............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
tableA.setPosition(136, 103)
customerAEntrance()

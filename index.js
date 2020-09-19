const mineflayer = require('mineflayer');
const radarPlugin = require('mineflayer-radar')(mineflayer);
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const GoalFollow = goals.GoalFollow
const GoalBlock = goals.GoalBlock
const config = require("./config.json");




var bot = mineflayer.createBot({
    host: config.minecraft.serverIP,
    port: config.minecraft.serverPort,
    username: config.account.email,
    password: config.account.password,
    version: config.minecraft.version
});

bot.loadPlugin(pathfinder)
radarPlugin(bot);

// function followPlayer() {
//     const playerToFollow = bot.players['PanIntegralus']

//     if (!playerToFollow) {
//         bot.chat("I don't see the player.")
//         return
//     }

//     const mcData = require('minecraft-data')(bot.version)
//     const movements = new Movements(bot, mcData)
//     bot.pathfinder.setMovements(movements)

//     const goal = new GoalFollow(playerToFollow.entity, 1.5)
//     bot.pathfinder.setGoal(goal, true)
// }

function lookAtNearestPlayer () {
    if (config.botSettings.lookAtNearestPlayer == true) {
        const playerFilter = (entity) => entity.type === 'player'
        const playerEntity = bot.nearestEntity(playerFilter)
    
        if (!playerEntity) return
    
        const pos = playerEntity.position.offset(0,playerEntity.height,0)
        bot.lookAt(pos)
    }
}

// bot.once('spawn', followPlayer)

bot.on('physicTick', lookAtNearestPlayer)

bot.on("login", ()=>{
    console.log(`Logged in as ${bot.username}\nServer IP: ${config.minecraft.serverIP}:${config.minecraft.serverPort}\n`)
});


bot.on("message", async message =>{
    let chat = message.toString()
    console.log(chat);
});
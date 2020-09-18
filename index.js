const mineflayer = require('mineflayer');
const config = require("./config.json");




var bot = mineflayer.createBot({
    host: config.minecraft.serverIP,
    port: config.minecraft.serverPort,
    username: config.account.email,
    password: config.account.password,
    version: config.minecraft.version
});


bot.on("login", ()=>{
    console.log(`Logged in as ${bot.username}\nServer IP: ${config.minecraft.serverIP}:${config.minecraft.serverPort}\n`)
});


bot.on("message", async message =>{
    let chat = message.toString()
    if (chat.includes("Friend request")) {
        bot.chat(`/f accept`);
    };
    console.log(chat);
});
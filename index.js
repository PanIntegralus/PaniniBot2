const mineflayer = require('mineflayer');
const acc = require("./bot.json");
const config = require("./config.json");




var bot = mineflayer.createBot({
    host: config.minecraft.serverIP,
    port: config.minecraft.port,
    username: acc.email,
    password: acc.password,
    version: 1.8
});
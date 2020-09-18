const mineflayer = require('mineflayer');
const config = require("./config.json");




var bot = mineflayer.createBot({
    host: config.minecraft.serverIP,
    port: config.minecraft.port,
    username: config.account.email,
    password: config.account.password,
    version: config.minecraft.version
});
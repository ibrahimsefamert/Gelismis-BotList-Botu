const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var oyun = ["Sefa MERT"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
  }, 12000);
  client.user.setStatus("dnd");

  /*client.user.setActivity("a!yardım | a!davet | a!prefix ☣", { type: "WATCHING" });*/
};

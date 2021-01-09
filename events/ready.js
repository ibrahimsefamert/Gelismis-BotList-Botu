const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var atlanticode = ["youtube.com/SefaMERT"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (atlanticode.length - 0 + 1) + 0);
  }, 12000);
  client.user.setStatus("online");


};

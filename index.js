const express = require("express");
const app = express();
///////////GAME-TUBE
app.listen(() => console.log("GAME-TUBE"));
app.listen(() => console.log("Dev Server : https://discord.gg/37HUDbx"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///////////GAME-TUBE

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');


///////////GAME-TUBE


const prefix = "&"
const developers = "612050940035334166"


client.on("ready", () => {
   client.user.setActivity(`${prefix}help`)


});




 ///////////GAME-TUBE

 client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
       
        .setTitle(':white_check_mark: **تم أرسال اوامر التقديم في الخاص**')
     const embed = new Discord.RichEmbed()
        
         .setTitle('GAME-TUBE')
         .setURL('https://discord.gg/37HUDbx')
         .setDescription(`
         \`\`\` Commands  :\`\`\`         
         
         - ${prefix}help    /////////لمعرفة اوامر البوت
         		          
         - ${prefix}bc      /////////لإرسال رسالة
         
         - ${prefix}ping    /////////للبينغ
         
         - ${prefix}prime   /////////سكريت


This Bc Bot Make By : https://www.youtube.com/channel/UCXADPiB1rxyjtf617-WD_RQ?view_as=subscriber


         
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**افتح الخاص لتصلك الاوامر**'))
   
   }
   });///////////GAME-TUBE




client.on('message',msg  => { if (msg.content === `${prefix}prime`) { msg.reply('**Soon...**'); } });///////////GAME-TUBE


///////////GAME-TUBE

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
}; ///////////GAME-TUBE 
});///////////GAME-TUBE

///////////GAME-TUBE

client.on('message', message =>{
  if(message.content === prefix + 'ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});

client.login("NzY5MzUzMjE3MzkzMjk1Mzcy.X5NyBA.rCUwMoC-04x_Wr05FtgUC1sHAf0");

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    await conn.sendMessage(from, {
          text: `"*🎥 © HELLOW WELCOME SYSTEM MENU BY  SHAnuwa  BY (main owner) ENJOY THE BOT AND FOLLOW MY CHANNEL..👨‍💻*"`,
          contextInfo: {
            externalAdReply: {
              title: '🎥 SHANUWA🎥',
              body: '©MADE BY  SHANUWA👨‍💻 .',
              thumbnail: { url: `https://i.ibb.co/N6xG2jyj/Tharusha-Md.jpg` }, // Thumbnail URL
              sourceUrl: 'https://whatsapp.com/channel/0029Vb1mgOeCXC3K15xnyF2z', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        });

let status =`────────────────────────────────────────┐
💻 - 𝗦𝗛𝗔𝗡𝗨𝗪𝗔 𝗠𝗗 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢𝗠𝗔𝗧𝗜𝗢𝗡 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

✘  𝗥ᴜɴᴛɪᴍᴇ :-* ${runtime(process.uptime())}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

✗ *𝗥ᴀᴍ 𝗨ꜱᴀɢᴇ :-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

✗ *𝗣ʟᴀᴛ 𝗙ᴏʀᴍ :-* ${os.hostname()}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
✗ *𝗢ᴡɴᴇʀ :-* SHANUWA

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

✗ *𝗩ᴇʀꜱɪᴏɴ :-* 1.0.0

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


────────────────────────────────────────┚`
    await conn.sendMessage(from, {
          text: status,
          contextInfo: {
            externalAdReply: {
              title: '🎥 SHANUWA MD🎥',
              body: '©MADE BY  SHANUWA👨‍💻 .',
              thumbnail: { url: `https://i.ibb.co/N6xG2jyj/Tharusha-Md.jpg` }, // Thumbnail URL
              sourceUrl: 'https://whatsapp.com/channel/0029Vb1mgOeCXC3K15xnyF2z', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        });

}catch(e){
console.log(e)
reply(`${e}`)
}
})

const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
const mono = "```"

    function detectPlatform() {
      if (process.env.REPL_ID) return 'Replit';
      if (process.env.HEROKU_APP_NAME) return 'Heroku';
      if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
      if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
      if (process.env.VERCEL) return 'Vercel';
      if (process.env.RENDER) return 'Render';
      if (process.env.NETLIFY) return 'Netlify';
      if (process.env.WORKFLOW) return 'Workflow';
      if (process.env.FLYIO_APP_NAME) return 'Fly.io';
      return 'Unknown Platform';
    }
    const platformName = detectPlatform();

cmd({
      pattern: "alive",
      alias: ["online"],
      desc: "Chek Bot Alive",
      category: "main",
      react: "👋🏻",
      filename: __filename
    },
    
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;
 // System and memory information
          const uptime = runtime(process.uptime());
          const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
          const cpuArch = os.arch();
          const cpuCores = os.cpus().length;
          const systemType = os.type();
          const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

          // Custom message for Render platform
          let platformMessage = '';
          if (platformName === 'Render') {
              platformMessage = '\n🌟 You are currently hosting on Render! Enjoy seamless deployments.';
          }
          ///////status been sent//////

       await conn.sendMessage(from, {
          text: "*🎥 © HELLOW WELCOME MAIN MENU BY  SHANUWA MD BY  (main owner) ENJOY THE BOT AND FOLLOW MY CHANNEL..🎥*",
          contextInfo: {
            externalAdReply: {
              title: '🎥 SHANUWA MD🎥',
              body: '©MADE BY  PAKAYA👨‍💻 .',
              thumbnail: { url: `https://i.ibb.co/N6xG2jyj/Tharusha-Md.jpg` }, // Thumbnail URL
              sourceUrl: 'https://whatsapp.com/channel/0029Vb1mgOeCXC3K15xnyF2z', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        });
        
        let desc = `
 
 👋 Hello ${pushname}, 🎥 Ｉ ａｍ   Ａｌｉｖｅ ｎｏｗ ❯❯  🤖

╭────────────────────●●►
| *🛠️  𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}
| *📡  𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
| *⏱️  𝗥𝗨𝗡𝗧𝗜𝗠𝗘:* ${runtime(process.uptime())}
╰─────────────────────●●►

 *║  🎥  ❮❮  ＳＨＡＮＵＷＡ ＭＤ ＷＡＴＳＡＰＰ ＢＯＴ ❯❯  🎥  ║*
 

*✘ Welcome SHANUWA MD whats app bot you can download video songs and various videos through this bot. It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This technology is also related to AI.*
   
🍃 𝗛ᴀᴠᴀ 𝗡ɪᴄᴇ 𝗗ᴀʏ 🍃


🔢 Ｒᴇᴘʟʏ Ｔʜᴇ Ｎᴜᴍʙᴇʀ Ｔʜᴀᴛ Ｙᴏᴜ Ｗᴀɴᴛ

─────────────────────────────────
*❮  01  ❯   Ｂｏｔ Ｏｗｎｅｒ  Ｉｎｆｏ  ✘*
──────────────────────────────────
*❮  02  ❯    Ｉｎｆｏｍａｔｉｏｎ   ✘*

> ® SHANUWA MD WATSAPP BOT 🤖`
 // Sending the image with caption
          const vv = await conn.sendMessage(from, {


          text: desc,
          contextInfo: {

          forwardingScore: 0,
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
          newsletterName: 'SHANUWA MD',
          newsletterJid: "@newsletter",
          },
          externalAdReply: {
              title: `🎥 SHANUWA MD BOT🎥`,
              body: `👨‍💻 HY BRO 👨‍💻`,
              thumbnailUrl: `https://i.ibb.co/N6xG2jyj/Tharusha-Md.jpg`,
              sourceUrl: `https://whatsapp.com/channel/0029Vay0BqOCXC3EwTtXuF2F`,
              
mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':               
    await conn.sendMessage(from,{image:{url: `https://i.ibb.co/RCykr6s/b79d06dd832b0e08.jpg`},caption: `
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
SHANUWA MD WATSAPP BOT 🤖
 
❮❮  ᴏᴡɴᴇʀ ɴᴜᴍʙᴀʀ  |  📲 ✘`,
contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `🎥 SHANUWA🎥`,
                body: `The Best Multi Device movie ✘ Whatsapp Bot.`,
                thumbnailUrl: `https://i.ibb.co/N6xG2jyj/Tharusha-Md.jpg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });
                        break;
                    case '2':
    await conn.sendMessage(from,{image:{url: `https://i.ibb.co/N6xG2jyj/Tharusha-Md.jpg`},caption: `*👋🏻 HELLO ${pushname} This Is The Details About Me 🍃*

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

*│  ✘* *𝗦ʜᴀᴅᴏᴡ 𝗠ᴏᴠɪᴇ ✘ 𝗞ɪʟᴀʀ 🍃💗*
*│  ✘* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴅᴀᴍᴀʏᴀɴᴛʜᴀ*🍃💗
*│  ✘* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ* 🔗
`,
contextInfo: {
            forwardingScore: 0,
            isForwarded: false,
            externalAdReply: {
                title: `🎥 SHANUWA MD`,
                body: `The Best Multi Device movie ✘ Whatsapp Bot.`,
                thumbnailUrl: `https://i.ibb.co/s9tvvbDr/Tharusha-Md.jpg`,  // Your logo URL
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });

                        

                        break;
                    default:
                        reply("Invalid option. Please select a valid option ❗");
                }

            }
        });
        

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

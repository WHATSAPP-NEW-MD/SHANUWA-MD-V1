const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHANUWA-MD=W0BWDZha#2s_sBhQ6STVKAu45W5jnP7LB5HouMI8mHWTr9mP_BSU",
MONGODB: process.env.MONGODB || "mongodb+srv://lakshan54:Shadow123456@cluster0.4bwik.mongodb.net/",
PREFIX:  process.env.PREFIX || ['.'] ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
BTN: "FOLLOW US :)",
FOOTER: "SHANUWA MD 🔥",
MAX_SIZE: 500,
};


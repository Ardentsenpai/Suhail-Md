const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_29_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlgyQ0l1MTdpbk9UZlNPWnRmUGpxRmVQRWFjWUxSSFRsNlNSQXNZVnJIZkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInU4OE9ONWZ3UUh5OFBlQThpOWdRdXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDhhYThmMjktZDdjMy00NDJhLWIyNzMtYzdlZjFhYTgxODVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDIyNCxcbiAgICAgIDc0LFxuICAgICAgNyxcbiAgICAgIDE2NCxcbiAgICAgIDE3MixcbiAgICAgIDE4OSxcbiAgICAgIDE4MSxcbiAgICAgIDI1MyxcbiAgICAgIDc2LFxuICAgICAgMTI3LFxuICAgICAgMTYyLFxuICAgICAgMjAxLFxuICAgICAgMTc4LFxuICAgICAgOTEsXG4gICAgICA2OSxcbiAgICAgIDE4MCxcbiAgICAgIDUyLFxuICAgICAgMTc4LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxMzAsXG4gICAgICAzMyxcbiAgICAgIDMzLFxuICAgICAgMTI3LFxuICAgICAgMjA0LFxuICAgICAgMjI5LFxuICAgICAgMjI1LFxuICAgICAgMTM1LFxuICAgICAgMTQ4LFxuICAgICAgMTgzLFxuICAgICAgMjI4LFxuICAgICAgMTUwLFxuICAgICAgOTQsXG4gICAgICAxMDMsXG4gICAgICA3MixcbiAgICAgIDE2NSxcbiAgICAgIDYzLFxuICAgICAgMjM3LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUHczVThRaEt6RHNRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBHeHd3SGdFemg1dktqbmlIOXMxb3NxVHIya3lwMVNGK1dXUVVHNU5SQTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEozQm1ld2dweEpNL3NJREs5V0Y0emxoQlRNRkhWRU4zWUtuUEdTNXJVZ0pCQllUcWJHVk5ydXczU0hjTUVSWklCaVpqaGp0MG0ySXBXL0svdGIvQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUjJJc0t0MjVGaXlpMFNOMzA2K0tLTkYwQXpqWWRxSEhpb3lrbHpVWHEwakJxeEc4SGx3VzRHcE9wc2FMa3dmNTNGRVZzeFhZajZOZ0g3RWhDbU1uZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE2NjA4ODcwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3ODYxNDY3OTUzOTc2Njo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNxdWFyZS1kdWRlXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE2NjA4ODcwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDQ3NjU1NFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ard",
  packname: process.env.PACK_NAME || "ardent",
  botname : process.env.BOT_NAME  || "ardent",
  ownername:process.env.OWNER_NAME|| "ARDENT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

const fs = require("fs")
const os = require('os');

let handler = async (m, { Sky, isCreator, isPremium, qtext, runtime, toIDR }) => {
let teksnya = `
> *乂 Information - Bot 乂*
\`⭑ Botname :\` *${global.botname2}*
\`⭑ Version :\` *${global.versi}*
\`⭑ Mode :\` *${Sky.public ? "Public": "Self"}*
\`⭑ Creator :\` @⁨${global.owner} *✰*
\`⭑ Runtime Bot :\` *${runtime(process.uptime())}*
\`⭑ Uptime Vps :\` *${runtime(os.uptime())}*
> *乂 Information - Users 乂*
\`⭑ Number :\` ${m.sender.split("@")[0]}
\`⭑ Status :\` *${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}*
> *— STICKER MENU —*
  ➤ \`.qc\`
  ➤ \`.brat\`
  ➤ \`.sticker\`
  ➤ \`.stickerw\`
> *— DOWNLOAD MENU —*
  ➤ \`.tiktok\`
  ➤ \`.tiktokmp3\`
  ➤ \`.instagram\`
  ➤ \`.ytmp3\`
  ➤ \`.ytmp4\`
  ➤ \`.play\`
  ➤ \`.playvid\`
  ➤ \`.gitclone\`
  ➤ \`.mediafire\`
> *— OTHER —*
  ➤ \`.cekidch\`
  ➤ \`.cekidgc\`
  ➤ \`.readviewonce\`
`
await Sky.sendMessage(m.chat, {text: teksnya, mentions: [m.sender, global.owner+"@s.whatsapp.net"]}, {quoted: qtext})
}

handler.command = ["menu"]

module.exports = handler

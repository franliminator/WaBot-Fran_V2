let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 500
    m.reply('+500')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Ya has reclamado hoy:)')
}
handler.help = ['diario', 'reclamar']
handler.tags = ['xp']
handler.command = /^(diario|reclamar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


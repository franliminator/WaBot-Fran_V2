const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiqueta a uno, e ingrese el número para verificación!'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Listo usuario agregado como premium✅*\n\n*Numero : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expira:* 30Días\n*Gracias por añadir premium !*`)
  
}
handler.help = ['añadirprem <número>']
handler.tags = ['owner']
handler.command = /^añadirprem$/i
handler.rowner = true

module.exports = handler

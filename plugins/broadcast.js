let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.array.filter(v => !v.read_only && v.message).map(v => v.jid)
  for (let id of chats) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n'+'[ *MSG DE DIFUSION* ]')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `_Enviar mensajes de difusión a ${chats.length} chats_`, m)
}
handler.help = ['difusion','df'].map(v => v + ' <texto>')
handler.tags = ['owner']
handler.command = /^(difusion|df)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
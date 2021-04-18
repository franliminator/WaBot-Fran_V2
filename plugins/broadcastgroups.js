let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  for (let id of groups) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n'+'[ *MSG DE DIFUSION* ]')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `_
  Enviar mensajes de difusión a ${groups.length} grupos_`, m)
}
handler.help = ['difusiongrupos','dfgp'].map(v => v + ' <texto>')
handler.tags = ['owner']
handler.command = /^(difusion|df)(grupos|grupo|gp)$/i
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
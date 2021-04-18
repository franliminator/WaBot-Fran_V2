let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Fuera' : 'Dentro'}]`).join`\n\n`
  conn.reply(m.chat, 'Lista de grupos:\n' + txt, m)
}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^(grupos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


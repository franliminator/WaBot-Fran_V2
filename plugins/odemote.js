let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
}
handler.help = ['degradar'].map(v => 'owner' + v + ' @usuario')
handler.tags = ['owner']
handler.command = /^(degradarowner)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler

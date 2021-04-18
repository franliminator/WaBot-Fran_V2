let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set(conns.map(v => v.user).filter(v => v).map(v => v.jid))]                                                                 
    for (let id of users) conn.sendMessage(id, text, m.mtype, m.msg.contextInfo ? {
      contextInfo: m.msg.contextInfo
    } : {})
    conn.reply(m.chat, `_Transmisión enviada con éxito a ${users.length} usuarios_`, m)
  } else conn.reply(m.chat, 'Esta función es solo para hosts de bots',  m)
}
handler.help = ['difusionbot','dfbot'].map(v => v + ' <texto>')
handler.tags = ['host']
handler.command = /^(difusion|df)(jadi)?bot$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
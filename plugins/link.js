let handler = async (m, { conn, args }) => {
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(m.chat)), m)
}
handler.help = ['enlacegrupo', 'enlace']
handler.tags = ['group']
handler.command = /^enlace(grupo)?$/i                                                                                                           
handler.owner = false                                                                                                                           
handler.mods = false                                                                                                                            
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true
handler.fail = null
module.exports = handler


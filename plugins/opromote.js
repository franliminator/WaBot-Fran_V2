let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
handler.help = ['ascender'].map(v => 'owner' + v + ' @usuario')
handler.tags = ['owner']                                                                                                                        
handler.command = /^(ascenderowner)$/i                                                                                                          
handler.owner = true                                                                                                                            
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false                                                                                                                           
handler.botAdmin = true                                                                                                                                                                                                                                                                         
handler.fail = null                                                                                                                             
module.exports = handler
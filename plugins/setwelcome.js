let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Bienvenida cambiada a:\n@usuario (Mencion)\n@sujeto (nombre del grupo )')
  } else throw 'Y el texto ?'
}
handler.help = ['selecbienvenida <texto>']
handler.tags = ['owner', 'group']

handler.command = /^selecbienvenida$/i
module.exports = handler

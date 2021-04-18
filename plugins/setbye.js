let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Despedida configurada correctamente\n@usuario (Mencion)')
  } else throw 'Donde esta el texto?'
}
handler.help = ['selecdespedida <texto>']
handler.tags = ['owner', 'group']

handler.command = /^selecdespedida$/i
module.exports = handler


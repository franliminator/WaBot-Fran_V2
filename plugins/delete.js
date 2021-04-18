let handler = function (m) {
  if (!m.quoted) throw 'Etiqueta un mensaje del bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Solo puedo borrar mensajes míos'
  if (!isBaileys) throw 'El mensaje no es enviado por un bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['borrar', 'borrar']
handler.tags = ['info']
handler.command = /^del(ete)?$/i
handler.admin = false
handler.botAdmin = false
handler.group = false
module.exports = handler

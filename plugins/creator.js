let handler = function (m) {
  this.sendContact(m.chat, '34693555687', '👑Fran.mga_4👑', m)
}
handler.help = ['dueño', 'creador']
handler.tags = ['info']

handler.command = /^(dueño|creador)$/i

module.exports = handler

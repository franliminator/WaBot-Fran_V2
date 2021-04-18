const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'El número de serie está vacío'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number invalido'
  user.registered = false
  m.reply(`Registro eliminado!`)
}
handler.help = ['desregistrar'].map(v => 'unreg' + v + ' <NS|NUMERO SERIAL>')
handler.tags = ['exp']

handler.command = /^desregistrar?$/i
handler.register = true

module.exports = handler

let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
  let isEnable = /habilitar/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  switch (type) {
    case 'bienvenido':
      chat.welcome = isEnable
      break
    case 'borrar':
      chat.delete = isEnable
      break
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    default:
      return m.reply(`
List option: bienvenido | borrar | publico

Ejemplo:
${usedPrefix}habilitar bienvenido
${usedPrefix}disable bienvenido
`.trim())
  }
  m.reply(`
*${type}* se establecio *${isEnable ? 'activado' : 'desactivado'}* en ${isAll ? 'este bot' : 'este chat'}
`.trim())
}
handler.help = ['habilitar']
handler.tags = ['group', 'owner']
handler.command = /^((des)habilitar)$/i

module.exports = handler

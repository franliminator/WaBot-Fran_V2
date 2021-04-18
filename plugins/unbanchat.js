let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['desbanearchat']
handler.tags = ['owner']
handler.command = /^desbanearchat$/i
handler.owner = true

module.exports = handler

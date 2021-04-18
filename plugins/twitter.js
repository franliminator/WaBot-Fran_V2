let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm... Y el link?'
  global.API('xteam', '/dl/twitter', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^twitter$/i

module.exports = handler

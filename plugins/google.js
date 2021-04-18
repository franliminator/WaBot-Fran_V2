let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'No hay texto para buscar', m)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
}
handler.help = ['google'].map(v => v + ' <texto para buscar>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


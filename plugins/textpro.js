let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*Lista Efectos*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efecto *${effect}* desconocido`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
  try {
    conn.sendFile(m.chat, url, 'textpro.jpg', `*TEXTPRO*\n*Efecto:* ${effect}`, m)
  } catch (e) {
    m.reply(url)
    throw e
  }
}
handler.help = ['textopro'].map(v => v + ' <efecto> <tecto>|[texto2]')
handler.tags = ['tools']
handler.command = /^(textopro)$/i

module.exports = handler


let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
Menos *${max - user.exp}* otra vez!
`.trim()
  }
  user.level++
  m.reply(`
Felicitaciones, has subido de nivel!
*${user.level - 1}* -> *${user.level}*
  `.trim())
}

handler.help = ['subirnivel']
handler.tags = ['xp']

handler.command = /^subirnivel$/i

module.exports = handler

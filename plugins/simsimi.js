let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if (!args || !args[0]) return conn.reply(m.chat, `Formato incorrecto!\n\n*Ejemplpo* : _${usedPrefix + command} Hola simsimi_`, m)
	let text = args.join` `
	fetch("https://simsumi.herokuapp.com/api?text=" + encodeURIComponent(text) + "&lang=id")
  .then(res => res.json())
  .then(batch => {
    conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, `${batch.success}`, m)
  }) .catch(() => { conn.reply(m.chat, `_¡La función simsimi es errónea! Perdón :(_`, m) })
}
handler.help = ['simsimi'].map(v => v + ' *texto*')
handler.tags = ['fun']
handler.command = /^(simsimi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 750
module.exports = handler


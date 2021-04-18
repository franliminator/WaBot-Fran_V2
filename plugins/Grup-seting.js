let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = { // Switch Case Like :v
		'abierto': false,
		'cerrado': true,
	}[(args[0] || '')]
	await conn.updatePresence(m.chat, Presence.composing)
	if (isClose === undefined)
		throw `
*Formato incorrecto! Ejemplo :*

  *○ ${usedPrefix + command} cerrado*
  *○ ${usedPrefix + command} abierto*
`.trim()
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grupo *abierto / cerrado*']
handler.tags = ['group']
handler.command = /^(grupo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler

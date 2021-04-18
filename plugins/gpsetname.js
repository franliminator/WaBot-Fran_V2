
let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args }) => {
	let text = args.join` `
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `Pon el texto para el nombre del grupo`, m)
	} else if(args[0].length > 25) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `El máximo son 25 carácteres!`, m)
	} else {
		conn.groupUpdateSubject(m.chat, text)
	} 
}
handler.help = ['establecern *texto*']
handler.tags = ['group admin']
handler.command = /^(establecern)$/i
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

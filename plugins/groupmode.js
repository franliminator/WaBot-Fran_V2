let handler  = async (m, { conn, args }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ MODO GRUPO ]*\n\nEstablece encendido o apagado !`, m)
	} else if(args[0] == 'encendido') {
    global.DATABASE._data.groupMode = true
		conn.reply(m.chat, `*[ MODO GRUPO ]*\n\nEl bot se cambió correctamente a Solo grupo.\nBot no se puede usar los comandos en el chat personal del bot`, m)
	} else if(args[0] == 'apagado') {
    global.DATABASE._data.groupMode = false
		conn.reply(m.chat, `*[ MODO GRUPO ]*\n\nSe desactivó correctamente el modo Solo grupo.\nPuede usar bots en el chat personal`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ MODO GRUPO ]*\n\nEstablece encendido o apagado !`, m)
	} 
}
handler.help = ['groupmode *encendido/apagado*']
handler.tags = ['owner']
handler.command = /^(modogrupo)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
module.exports = handler

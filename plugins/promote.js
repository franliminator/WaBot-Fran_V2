let handler = async (m, { conn, text }) => {
	if(isNaN(text) && !text.match(/@/g)){
		return conn.reply(m.chat, `*Uso apropiado*\n\n.ascender @usuario\n.ascender -> responder chat`, m)
	}else if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Uso apropiado*\n\n.ascender @usuario\n.ascender -> responder chat`, m)
	if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `*Ingrese el número correcto !*`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, `*Ha sido ascendido.*`, m)
	}	
}
handler.help = ['ascender'].map(v => '*@usuario*','*(contestar msg)*' + v)
handler.tags = ['group admin']
handler.command = /^(ascender)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler

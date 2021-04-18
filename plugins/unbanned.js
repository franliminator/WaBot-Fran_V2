let handler = async (m, { conn, text }) => {
	if(isNaN(text)) {
		var number = text.split`@`[2]
	} else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Da un número o contesta un msg.*`, m)
	if(number.length > 15) return conn.reply(m.chat, `*Formato no válido.*`, m)
	
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
			if(global.DATABASE._data.users[user].isBanned == false){
			  conn.reply(m.chat, `*Desbaneado.*`, m)
			}else{
				global.DATABASE._data.users[user].isBanned = false
				global.DATABASE._data.users[user].isBanned = false
				global.DATABASE._data.banned -= 1
				var banTotal = global.DATABASE._data.banned
				conn.reply(m.chat, `*Desbaneado*\n*Primero da las gracias al propietario (👑Fran.mga_4👑*\n\n*Total Baneados : ${banTotal}*`, m)
			}
	}	
}

handler.help = ['desbanear'].map(v => '@usuario ','(mencion)' + v)
handler.tags = ['owner']
handler.command = /^desbanear$/i
handler.owner = true
module.exports = handler

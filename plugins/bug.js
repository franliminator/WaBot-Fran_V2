
let handler  = async (m, { conn, text}) => {
  if (!text){
    conn.reply(m.chat,'Ingresa el informe de errores de un amigo :)',m)
  }else {
    conn.reply(global.owner + '@s.whatsapp.net',`*Reporte enviado de: @${m.sender.split('@')[0]}*\n\n${text}`, m,{contextInfo: {
      mentionedJid: [m.sender]
    }})
    conn.reply(m.chat,`Se envió un informe de error correctamente\n\nSi haces informes falsos te puedes ir *BANEADO*`,m)
  }
}
handler.help = ['bug *texto*']
handler.tags = ['info']
handler.command = /^(bug)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.exp = 250
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

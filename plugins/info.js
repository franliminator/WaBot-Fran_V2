let handler  = async (m, { conn, usedPrefix: _p }) => {
    conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ El Bot está hecho con JavaScript
║     y Nodejs
╠➥ Script: @fran.mga_4                                                                                                                          
║                                                                                                                                               
╠➥ Instagram: @fran.mga_4
║
║>Dudas? Wa.me/34693555687
║                                                                                                                                               
╠═〘 WaBot V2 〙 ═                                                                                                                               
`.trim(), m)                                                                                                                                    
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i                                                                                                                   
handler.owner = false                                                                                                                           
handler.mods = false                                                                                                                            
handler.premium = false                                                                                                                         
handler.group = false                                                                                                                           
handler.private = false                                                                                                                         
handler.admin = false                                                                                                                           
handler.botAdmin = false

handler.fail = null                                                                                                                                                                                                                                                                             
module.exports = handler
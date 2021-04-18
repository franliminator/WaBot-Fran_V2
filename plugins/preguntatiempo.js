let handler = async (m, { conn, text }) => {                                                                                                      
    conn.reply(m.chat, `                                                                                                                          
    *pregunta:* ${m.text}                                                                                                                           
    *responder:* ${math.floor(math.random() * 10)} ${pickrandom(['segundo', 'minuto', 'hora', 'día', 'domingo', 'mes', 'año', 'década', 'siglo'])} otra vez ...                                                                                                                                     
    `.trim(), m)
}                                                                                                                                               
handler.help = [''].map(v => 'preguntatiempo' + v + ' <texto>?')                                                                                
handler.tags = ['kerang']                                                                                                                       
handler.customPrefix = /(\?$)/
handler.command = /^preguntatiempo?/i                                                                                                           
handler.owner = false
handler.mods = false                                                                                                                            
handler.premium = false                                                                                                                         
handler.group = false                                                                                                                           
handler.private = false                                                                                                                                                                                                                                                                         
handler.admin = false                                                                                                                           
handler.botAdmin = false                                                                                                                                                                                                                                                                        
handler.fail = null                                                                                                                                                                                                                                                                             
module.exports = handler                                                                                                                                                                                                                                                                        
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]                                                                                          
}
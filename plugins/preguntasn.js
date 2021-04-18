let handler = async (m, { conn, text }) => {                                                                                                      
    conn.reply(m.chat, `                                                                                                                          
    *Pregunta:* ${m.text}                                                                                                                           
    *Respuesta:* ${pickRandom(['Sí','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}                                                    
    `.trim(), m)                                                                                                                                    
}
handler.help = ['preguntaSN <texto>?']                                                                                                          
handler.tags = ['kerang']                                                                                                                       
handler.customPrefix = /(\?$)/                                                                                                                  
handler.command = /^preguntaSN$/i
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
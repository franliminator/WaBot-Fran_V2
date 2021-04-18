let handler  = async (m, { conn }) => {                                                                                                                 
    conn.reply(m.chat,`“${pickRandom(global.murothal)}”`, m)                                                                                
}                                                                                                                                               
handler.help = ['refran']                                                                                                                       
handler.tags = ['quotes']
handler.command = /^(refran)$/i                                                                                                                 
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
    return list[Math.floor(list.length * Math.random())]                                                                                    
}                                                                                                                                                                                                                                                                                               
global.murothal = [
        "De tal palo, tal astilla",                                                                                                                     
        "Al mal tiempo, buena cara",                                                                                                                    
        "A llorar al valle",
        "No es oro todo lo que reluce",                                                                                                                 
        "Dinero llama dinero",                                                                                                                          
        "A la tercera va la vencida",
        "Más vale prevenir que curar",
        "Al que madruga, Dios le ayuda",                                                                                                                
        "Tira la piedra y esconde la mano",                                                                                                             
        "El hábito no hace al monje",                                                                                                                   
        "Más vale tarde que nunca",
        "Cría fama y ponte a dormir",                                                                                                                   
        "Dios aprieta pero no ahoga",                                                                                                                   
        "Quien mucho abarca, poco aprieta",                                                                                                             
        "Preguntando se llega a Roma",
        "Una golondruna no hace verano",                                                                                                                
        "Mucho ruido y pocasnueces",
        "Tanto tienes, tanto vales",                                                                                                                    
        "¿Dónde va Vicente? Donde va la gente",                                                                                                         
        "El que espera, desespera",                                                                                                                     
        "No hay mal que dure cien años",                                                                                                                
        "Guerra avisada no mata soldados",                                                                                                              
        "El que no la debe, no la teme",                                                                                                                
        "Si te he visto, no me acuerdo",                                                                                                                
        "No hay nal que por bien no venga",                                                                                                             
        "Querer es poder",                                                                                                                              
        "Más vale maña que fuerza",                                                                                                                     
        "Barriga lleba, corazón contento",                                                                                                              
        "Poco a poco se anda lejos",                                                                                                                    
        "Lo cortés no quita lo valiente",
        "Contigom pan y cebolla",                                                                                                                       
        "Nunca es tarde si la dicha es buena",                                                                                                          
        "Quien tiene boca se equivoca",
        "Haz bien y no mires a quién",                                                                                                                  
        "El pez grande se come al pequeño",                                                                                                             
        "A rey muerto, rey puesto",
        "Se dice el pecado, no el pecador",                                                                                                             
        "Hoy por ti, mañana por mí",
        "El que busca, encuentra",                                                                                                                      
        "Gota a gota, la mas se agota",                                                                                                                 
        "El tiempo es oro",                                                                                                                             
        "Quien canta, su mal espanta",
        "El que a hierro mata, a hierro muere",                                                                                                         
        "Por la boca muere el pez",                                                                                                                     
        "La execpción hace la regla",                                                                                                                   
        "Un clavo saca otro clavo",
        "Decir refranes es decir verdades",                                                                                                             
        "La intención es lo que cuenta",
        "Más claro no canta un gallo",                                                                                                                  
        "A mala vida, mala muerte",                                                                                                                     
        "Al pan, pan y al vino, vino",                                                                                                                  
        "Matar pulgas a balazos",                                                                                                                       
        "Agua que no has de beber dejala correr",                                                                                                       
        "Cada ladrón juzga por su condición",                                                                                                           
        "Camarón que se duerme, se lo lleva la corriente",                                                                                              
        "Se puede llevar el caballo al río, pero no se le puede obligar a tomar agua",                                                                  
        "Con la barriga vacíam ninguno muestra alegría",                                                                                                
        "Por mucho que madrugues no amanece más temprano",                                                                                              
        "La lengua es el castigo del cuerpo",                                                                                                           
        "La lengua es el castigo del cuerpo",                                                                                                           
        "Cada palo que aguante su vela",
        "Del agua mansa líbrame Dios, que la de la brava me libro yo",                                                                                  
        "El hombre como el oso, mientras más feo más hermoso",                                                                                          
        "El que tiene rabo de paja, que no se arrime ala candela",
        "La avaricia rompe el saco",                                                                                                                    
        "Mal de muchos, consuelo de tontos",                                                                                                            
        "Amor con amor se pega",
        "Lo que no mata, engorda",                                                                                                                      
        "Cara vemos, corazones no sabemos",
        "El casado, casa quiere",                                                                                                                       
        "La música amansa las fieras",                                                                                                                  
        "No hay quinto malo",                                                                                                                           
        "Mañana será otro día",
        "Cómo se vive, se muere",                                                                                                                       
        "Ojos que no ven, corazón que no siente",                                                                                                       
        "Piensa mal y acertarás",                                                                                                                       
        "Del árbol caído, todos hacen leña",
        "Ojo por ojo, diente por diente",                                                                                                               
        "Mala hierba nunca muere",
        "Quien se pica, ajos come",                                                                                                                     
        "No hay rosa sin espinas",                                                                                                                      
        "Mucho donaire, causa desaire",                                                                                                                 
        "Para muestra, un botón",                                                                                                                       
        "Lo barato, sale caro",                                                                                                                         
        "El que se excusa, se acusa",                                                                                                                   
        "El poeta nace, no se hace",                                                                                                                    
        "Sarna con gusto no pica",                                                                                                                      
        "Jaula nueva, pájaro muerto",                                                                                                                   
        "A otro perro con ese hueso",                                                                                                                   
        "Malos ojos son cariño",                                                                                                                        
        "En casa del herrero, cuchillo de palo"                                                                                                 
    ]
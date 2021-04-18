let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)                                                                                        
}                                                                                                                                               
handler.help = ['cita']
  handler.tags = ['quotes']                                                                                                                       
  handler.command = /^(cita)$/i
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
                                                                                                                                                  
    global.pantun = [                                                                                                                                       
        "Lo que importa es cuanto amor ponemos en el trabajo que realizamos. ~ Madre Teresa de Calcuta",
        "Quizás el sufrimiento y el amor tienen una capacidad de redención que los hombres han olvidado o, al menos, descuidado. ~ Martin Luther King",                                                                                                                                                 
        "Más que las ideas, a los hombres los separan los intereses. ~ Alexis Tocqueville",                                                             
        "La religión mal entendida es una fiebre que puede terminar en delirio. ~ Voltaire",                                                            
        "Cuando el error se hace colectivo adquiere la fuerza de una verdad. ~ Gustave Le Bon",
        "Creo que no se puede ser hombre, y mucho menos artista, sin tener una conciencia política. El arte es política. ~ Luchino Visconti",           
        "Si se hubiera de definir la democracia podría hacerse diciendo que es la sociedad en la cual no sólo es permitido, sino exigido, el ser persona. ~ María Zambrano",
        "La música es sinónimo de libertad, de tocar lo que quieras y como quieras, siempre que sea bueno y tenga pasión, que la música sea el alimento del amor. ~ Kurt D. Cobain",                                                                                                                    
        "La música es para el alma lo que la gimnasia para el cuerpo. ~ Platón",                                                                        
        "El mundo está lleno de pequeñas alegrías: el arte consiste en saber distinguirlas. ~ Li Tai-Po",
        "Pienso que una vida dedicada a la música es una vida bellamente empleada, y es a eso a lo que he dedicado la mía. ~ Luciano Pavarotti",        
        "Lo bueno del cine es que durante dos horas los problemas son de otros. ~ Pedro Ruiz",
        "Sin música la vida sería un error. ~ Friedrich Nietzsche",                                                                                     
        "Si la inspiración no viene a mí salgo a su encuentro, a la mitad del camino. ~ Sigmund Freud",                                                 
        "A veces hay que estropear un poquito el cuadro para poder terminarlo. ~ Eugène Delacroix",                                                     
        "Quienquiera que cultive la fantasía en el arte está un poco loco. Su problema estriba en hacer interesante esa locura. ~ François Truffaut",                                                                                                                                                   
        "No es necesario creer en lo que dice un artista, sino en lo que hace. ~ David Hockney",                                                        
        "La música es el arte más directo, entra por el oído y va al corazón. ~ Magdalena Martínez",                                                    
        "La música es el corazón de la vida. Por ella habla el amor; sin ella no hay bien posible y con ella todo es hermoso. ~ Franz Liszt",           
        "Componer no es difícil, lo complicado es dejar caer bajo la mesa las notas superfluas. ~ Johannes Brahms",                                     
        "La música puede dar nombre a lo innombrable y comunicar lo desconocido. ~ Leonard Bernstein",                                                  
        "El que escucha música siente que su soledad, de repente, se puebla. ~ Robert Browning",                                                        
        "Quien se enfada por las críticas, reconoce que las tenía merecidas. ~ Tácito",                                                                 
        "En la música todos los sentimientos vuelven a su estado puro y el mundo no es sino música hecha realidad. ~ Arthur Schopenhauer",
        "Ningún escritor joven desea tanto la crítica constructiva como la alabanza. ~ William Hill",                                                   
        "No existen más que dos reglas para escribir: tener algo que decir y decirlo. ~ Oscar Wilde",                                                   
        "La crítica debe hacerse a tiempo; no hay que dejarse llevar por la mala costumbre de criticar sólo después de consumados los hechos. ~Mao Tse-Tung",                                                                                                                                          
        "Un buen vino es como una buena película: dura un instante y te deja en la boca un sabor a gloria; es nuevo en cada sorbo y, como ocurre con las películas, nace y renace en cada saboreador. ~ Federico Fellini",
        "La música constituye una revelación más alta que ninguna filosofía. ~ Ludwig van Beethoven",                                                   
        "Los espejos se emplean para verse la cara; el arte para verse el alma. ~ George Bernard Shaw",                                                 
        "Aprender música leyendo teoría musical es como hacer el amor por correo. ~ Luciano Pavarotti",
        "¿Por qué esta magnífica tecnología científica, que ahorra trabajo y nos hace la vida mas fácil, nos aporta tan poca felicidad? La repuesta es está, simplemente: porque aún no hemos aprendido a usarla con tino. ~ Albert Einstein",                                                          
        "La matemática es la ciencia del orden y la medida, de bellas cadenas de razonamientos, todos sencillos y fáciles. ~ René Descartes",           
        "El mejor médico es el que conoce la inutilidad de la mayor parte de las medicinas. ~ Benjamin Franklin",
        "La naturaleza nos ha dado las semillas del conocimiento, no el conocimiento mismo. ~ Séneca",                                                  
        "Las matemáticas son el alfabeto con el cual Dios ha escrito el Universo. ~ Galileo Galilei",                                                   
        "Para las personas creyentes, Dios esta al principio. Para los científicos está el final de todas sus reflexiones. Max Planck",
        "En realidad, prefiero la ciencia a la religión. Si me dan a escoger entre Dios y el aire acondicionado, me quedo con el aire. ~ Woody Allen",                                                                                                                                                  
        "Sólo hay un bien: el conocimiento. Sólo hay un mal: la ignorancia. ~ Sócrates",                                                                
        "Las matemáticas no mienten, lo que hay son muchos matemáticos mentirosos. ~ Henry David Thoreau",                                              
        "Cuando las leyes de la matemática se refieren a la realidad, no son ciertas; cuando son ciertas, no se refieren a la realidad. ~ Albert Einstein",
        "Las proposiciones matemáticas, en cuanto tienen que ver con la realidad, no son ciertas; y en cuanto que son ciertas, no tienen nada que ver con la realidad. ~ Albert Einstein",                                                                                                              
        "Es completamente lícito para una católica evitar el embarazo recurriendo a las matemáticas, aunque todavía está prohibido recurrir a la física o a la química. ~ Henry-Louis Mencken",
        "Los médicos como la cerveza, mejor cuanto más viejos. ~ Thoman Fuller",                                                                        
        "Las matemáticas pueden ser definidas como aquel tema del cual no sabemos nunca lo que decimos ni si lo que decimos es verdadero. ~ Bertrand Russell",                                                                                                                                          
        "Un científico debe tomarse la libertad de plantear cualquier cuestión, de dudar de cualquier afirmación, de corregir errores. ~ Robert Oppenheimer",                                                                                                                                           
        "La soberanía del hombre está oculta en la dimensión de sus conocimientos. ~ Sir Francis Bacon",                                                
        "El progreso de la medicina nos depara el fin de aquella época liberal en la que el hombre aún podía morirse de lo que quería. ~ Stanislaw Lec",                                                                                                                                                
        "Un poco de ciencia aleja de Dios, pero mucha ciencia devuelve a Él. ~ Louis Pasteur",                                                          
        "Cuando un médico va detrás del féretro de su paciente, a veces la causa sigue al efecto. ~ Robert Koch",                                       
        "Psiquiatría: El único negocio donde el cliente nunca tiene la razón. ~ S. Kent",                                                               
        "La mayoría de las ideas fundamentales de la ciencia son esencialmente sencillas y, por regla general pueden ser expresadas en un lenguaje comprensible para todos. ~ Albert Einstein",
        "La estadística es una ciencia que demuestra que si mi vecino tiene dos coches y yo ninguno, los dos tenemos uno. ~ George Bernard Shaw",                                                                                                                                                       
        "El conocimiento nos hace responsables. ~ Ernesto 'Che' Guevara",
        "Con números se puede demostrar cualquier cosa. ~ Thomas Carlyle",                                                                      
    ]
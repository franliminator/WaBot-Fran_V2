let handler  = async (m, { conn, usedPrefix: _p }) => {
    conn.reply(m.chat, `
    *LISTA DE IDIOMAS:*
    af: Africano
    sq: Albanés
    ar: Árabe
    hy: Armenio
  ca: Catalán
  zh: Chino
  zh-cn: Chino (Mandarín/China)
  zh-tw: Chino (Mandarín/Taiwan)
  zh-yue: Chino (Cantonés)
  hr: Croata
  cs: Checo
  da: Danés
  nl: Holandés
  en: Inglés
  en-au: Inglés (Australia)
  en-uk: Inglés (Reino Unido)
  en-us: Inglés (Estados Unidos)
  eo: Esperanto
  fi: Finlandés
  fr: Francés
  de: Alemán
  el: Griego
  ht: Haití
  hi: Indú
  hu: Húngaro
  is: Islandés
  id: Indonesio
  it: Italiano
  ja: Japonés
  ko: Coreano
  la: Latin
  lv: Letón
  mk: Macedonio
  no: Noruego
  pl: Polaco
  pt: Portugués
  pt-br: Portugués (Brasil)
  ro: Rumano
  ru: Ruso
  sr: Serbio
  sk: Eslovaco
  es: Español
  es-es: Español (España)
  es-us: Español (EEUU)
  sw: Swahili
  sv: Sueco
  ta: Tamil
  th: Tailandes
  tr: Turco
  vi: Vietnamita

  cy: Galés
  `.trim(), m)
}
handler.help = ['ttslist']
handler.tags = ['tools']
handler.command = /^(ttslist)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false  

handler.botAdmin = false  
handler.fail = null 

module.exports = handler
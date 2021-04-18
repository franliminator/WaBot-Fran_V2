const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Ingrese la ip que desea rastrear', m)
    new Promise((resolve, reject) => {
        axios.get(`https://mnazria.herokuapp.com/api/check?ip=` + text)
            .then((res) => {
                const teks = `*[ RASTREADOR IP ]*\n\n➸ *Ciudad* : ${res.data.city}\n➸ *Código del continente* : ${res.data.continent_code}\n➸ *Continente* : ${res.data.continent_name}\n➸ *Código del País* : ${res.data.country_code}\n➸ *País* : ${res.data.country_name}\n➸ *IP* : ${res.data.ip}\n➸ *Latitud* : ${res.data.latitude}\n➸ *Longitud* : ${res.data.longitude}\n➸ *Código de Región* : ${res.data.region_code}\n➸ *Región* : ${res.data.region_name}\n➸ *Zip* : ${res.data.zip}`

                conn.reply(m.chat, teks, m)

            })
            .catch(reject)
    })

}

handler.help = ['ip'].map(v => v + ' *dirección ip*')
handler.tags = ['tools']
handler.command = /^(ip)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

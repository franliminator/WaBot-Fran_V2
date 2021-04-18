const { GroupSettingChange } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
    if (args[0] === 'abierto') {
        conn.reply(m.chat, `*Grupo abierto con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
    } else if (args[0] === 'cerrado') {
        conn.reply(m.chat, `*Grupo cerrado con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    } else if (args[0] === 'open') {
        conn.reply(m.chat, `*Grupo abierto con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
    } else if (args[0] === 'close') {
        conn.reply(m.chat, `*Grupo cerrado con éxito!*`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    } else {
        throw `*Ejemplo : ${usedPrefix}grupo abierto*`
    }
}

handler.help = ['grupo <abierto|cerrado>']
handler.tags = ['group']
handler.command = /^(grupo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalido'
    let res = await conn.acceptInvite(code)
    m.reply(`Se unió con éxito al grupo ${res.gid}`)
}
handler.help = ['entrar <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^entrar$/i

handler.prems = true

module.exports = handler

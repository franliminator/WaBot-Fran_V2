let handler = async m => m.reply(`
╭─〘 Fran.mga_4 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/franliminator]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^don(a|ar|acion)$/i

module.exports = handler

const fetch = require('node-fetch')
const FormData = require('form-data')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Y la foto?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `La imagen ${mime} No es soportada`
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await conn.sendFile(m.chat, await res.buffer(), 'hd.jpg', 'HD?', m)
}
handler.help = ['hd (contestar imagen)']
handler.tags = ['tools']
handler.command = /^(hd)$/i

module.exports = handler

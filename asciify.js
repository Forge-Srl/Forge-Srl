const sharp = require('sharp')
const asciify = async (path, {imgCharWidth, imgCharHeight, charWidth, charHeight}) => {
  const image = sharp(path)

  const metadata = await image.metadata()
  const scaledWidth = Math.floor(metadata.width / charWidth) * charWidth
  const scaledHeight = Math.floor(metadata.height / charHeight) * charHeight

  const {data, info} = await image
    .resize(scaledWidth, scaledHeight, {fit: 'fill'})
    .sharpen()
    .resize(imgCharWidth, imgCharHeight)
    .raw({depth: 'uchar'})
    .toBuffer({resolveWithObject: true})

  const rawImage = []
  for (let row = 0; row < info.height; row++) {
    const pixelRow = []
    for (let col = 0; col < info.width; col++) {
      const index = col + row * info.width
      const pixel = {
        r: Math.round(data.readUInt8(index * info.channels) / 4) * 4,
        g: Math.round(data.readUInt8(index * info.channels + 1) / 4) * 4,
        b: Math.round(data.readUInt8(index * info.channels + 2) / 4) * 4,
        a: info.channels === 4 ? Math.round((data.readUInt8(index * info.channels + 3) / 255) * 4) / 4 : 1,
      }
      pixelRow.push(pixel)
    }
    rawImage.push(pixelRow)
  }

  return `<div class="asciimg">${rawImage.map((r) => `<p>${r.map((p) => `<span style="background-color: rgba(${p.r}, ${p.g}, ${p.b}, ${p.a})">&nbsp;</span>`).join('')}</p>`).join('')}</div>`
}

module.exports = {asciify}

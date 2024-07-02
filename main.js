const $ = (id) => document.getElementById(id)

// boton para descargar meme
const descargarMeme = () => {
  domtoimage.toBlob($('canvas-meme')).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
  })
}
// fin boton descarga 


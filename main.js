//Selector de elementos
const $ = (id) => document.getElementById(id)

// boton para descargar meme
const descargarMeme = () => {
  domtoimage.toBlob($('canvas-meme')).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
  })
}
// fin boton descarga 

//Este es para la url de imagen
const actualizarImagen = (evento) => {
  if (evento.target.value.length !== 0) {
    $('image-meme').style.backgroundImage = `url("${evento.target.value}")`
  }
}
//Este es el inicializador de evento de URL
const inicializarImagen = () => {
  $('url-img-input').addEventListener('input', actualizarImagen);
};
// Inicializar todos los eventos
const inicializar = () => {
  inicializarImagen()
  $('download-meme-button').addEventListener('click', descargarMeme)
}
window.onload = inicializar
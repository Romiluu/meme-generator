//Selector de elementos
const $ = (id) => document.getElementById(id)

// boton para descargar meme
const descargarMeme = () => {
  domtoimage.toBlob($('canvas-meme')).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
  })
}
// fin boton descarga 

//Funcion para la url de imagen
const actualizarImagen = (evento) => {
  if (evento.target.value.length !== 0) {
    $('image-meme').style.backgroundImage = `url("${evento.target.value}")`
  }
}
//Funcion para actualizar el color 
const actualizarColorMezcla = (evento) => {
  $('blend-mode-color').innerText = evento.target.value.toUpperCase()// Actualiza el texto del color mostrado
  $('image-meme').style.backgroundColor = evento.target.value // Aplica el color de fondo al elemento 'image-meme'
}
// este es para actualizar el tipo de mezcla
const actualizarTipoMezcla = (evento) => {
  $('image-meme').style.backgroundBlendMode = evento.target.value // Aplica el modo de mezcla al elemento 'image-meme'
}

//Este es el inicializador de evento 
const inicializarImagen = () => {
  $('url-img-input').addEventListener('input', actualizarImagen);

  $('blend-mode-color-input').addEventListener('input', actualizarColorMezcla) //Inicializa la actualización de color de mezcla
  $('blend-mode-select').addEventListener('change', actualizarTipoMezcla) //Inicializa la actualización de tipo de mezcla


};






// Inicializar todos los eventos
const inicializar = () => {
  inicializarImagen()
  $('download-meme-button').addEventListener('click', descargarMeme)
}
window.onload = inicializar
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
//esta funcion es para los filtros
const actualizarFiltros = () => {
  const brightness = $('brightness-slider').value
  const opacity = $('opacity-slider').value
  const blur = $('blur-slider').value
  const contrast = $('contrast-slider').value
  const grayscale = $('grayscale-slider').value
  const hue = $('hue-slider').value
  const sepia = $('sepia-slider').value
  const saturate = $('saturate-slider').value
  const invert = $('invert-slider').value

  $(
    'image-meme'
  ).style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}
//Funcion para reestablecer los filtros
const reestrablecerFiltros = () => {
  $('brightness-slider').value = 1
  $('opacity-slider').value = 1
  $('blur-slider').value = 0
  $('contrast-slider').value = 100
  $('grayscale-slider').value = 0
  $('hue-slider').value = 0
  $('sepia-slider').value = 0
  $('saturate-slider').value = 100
  $('invert-slider').value = 0

  actualizarFiltros()
}

//Este es el inicializador de evento 
const inicializarImagen = () => {
  $('url-img-input').addEventListener('input', actualizarImagen);

  $('blend-mode-color-input').addEventListener('input', actualizarColorMezcla) //Inicializa la actualización de color de mezcla
  $('blend-mode-select').addEventListener('change', actualizarTipoMezcla) //Inicializa la actualización de tipo de mezcla

  $('brightness-slider').addEventListener('change', actualizarFiltros) // aca arranca inicializacion para filtros
  $('opacity-slider').addEventListener('change', actualizarFiltros)
  $('blur-slider').addEventListener('change', actualizarFiltros)
  $('contrast-slider').addEventListener('change', actualizarFiltros)
  $('grayscale-slider').addEventListener('change', actualizarFiltros)
  $('hue-slider').addEventListener('change', actualizarFiltros)
  $('sepia-slider').addEventListener('change', actualizarFiltros)
  $('saturate-slider').addEventListener('change', actualizarFiltros)
  $('invert-slider').addEventListener('change', actualizarFiltros)

  $('default-filters-button').addEventListener('click', reestrablecerFiltros) //inicializa la funcion que Reestablece los filtros.
};


// Inicializar todos los eventos
const inicializar = () => {
  inicializarImagen()
  $('download-meme-button').addEventListener('click', descargarMeme)
}
window.onload = inicializar
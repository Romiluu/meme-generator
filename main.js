//Selector de elementos
const $ = (id) => document.getElementById(id)

// boton para descargar meme
const descargarMeme = () => {
  domtoimage.toBlob($('canvas-meme')).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
  })
}

//-------------------------CAMBIAR TEMA ------------------------------------------------
//cambiar tema claro/oscuro
const alternarTema = () => {
  const body = document.body;
  const botonTema = $('theme-toggle-button');
  const icono = botonTema.querySelector('i');
  
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    botonTema.innerHTML = '<i class="fa-solid fa-moon"> Modo Oscuro</i>';
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    botonTema.innerHTML = '<i class="fa-regular fa-sun"> Modo Claro</i>';
  }
}

// Inicializador para cambiar tema
const inicializarTemas = () => {
  $('theme-toggle-button').addEventListener('click', alternarTema);
}

//------------------------- PANEL DE IMAGEN------------------------------------------------

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
//funcion para ajustar imagen responsive
const ajustarImagen = () => {
  $('canvas-meme').style.height = `${
    $('canvas-meme').getBoundingClientRect().width
  }px`
}
//Este es el inicializador de evento para imagen
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
  
  window.addEventListener('resize', ajustarImagen)
};

// ----------------------------PANELES OCULATAR Y MOSTRAR------------------------
//Funciones para los paneles.
const ocultarPanel = () => {
  $('panel').classList.add('oculto')
}

const mostrarPanel = () => {
  $('panel').classList.remove('oculto')
}

const mostrarPanelImagen = () => {
  $(`panel-text`).classList.add('oculto')
  $(`panel-img`).classList.remove('oculto')
}

const mostrarPanelTexto = () => {
  $(`panel-img`).classList.add('oculto')
  $(`panel-text`).classList.remove('oculto')
}

//inicializador para paneles.
const inicializarPaneles = () => {
  $('panel-img-button').addEventListener('click', () => {
    mostrarPanelImagen()
    mostrarPanel()
  })
  $('panel-text-button').addEventListener('click', () => {
    mostrarPanelTexto()
    mostrarPanel()
  })
  $('panel-close-button').addEventListener('click', ocultarPanel)
}

// ----------------------------PANEL DE TEXTO------------------------
//funcion para editar el texto
const actualizarTextos = () => {
  $('top-text').innerText = $('top-text-input').value
  $('bottom-text').innerText = $('bottom-text-input').value
}

//esta funcion es para sacar o mostrar paneles superior e inferior
const alternarTextos = () => {
  if ($('no-top-text-checkbox').checked) {
    $('top-text').classList.add('oculto')
  } else {
    $('top-text').classList.remove('oculto')
  }

  if ($('no-bottom-text-checkbox').checked) {
    $('bottom-text').classList.add('oculto')
  } else {
    $('bottom-text').classList.remove('oculto')
  }
}

//funcion para alinear texto
const alinearTexto = (alineacion) => {
  $('top-text').style.textAlign = alineacion
  $('bottom-text').style.textAlign = alineacion
}

//funcion para ajustar tamanio de fuente
const actualizarTamanioTexto = () => {
  const tamanio = $('text-size-input').value
  $('top-text').style.fontSize = `${tamanio}px`
  $('bottom-text').style.fontSize = `${tamanio}px`
}

//funcion para cambiar la fuente
const actualizarFuente = () => {
  const fuente = $('text-font-select').value
  $('top-text').style.fontFamily = fuente
  $('bottom-text').style.fontFamily = fuente
}

//Funcion para cambiar el color de la letra
const actualizarColorTexto = () => {
  const color = $('text-color-input').value.toUpperCase()

  $('text-color').innerText = color
  $('top-text').style.color = color
  $('bottom-text').style.color = color
}

//funcion para cambiar el color de fondo del texto dependiendo si el fondo es transparente o no.
const actualizarFondoTexto = () => {
  if (!$('text-no-background-checkbox').checked) {
    const color = $('text-background-color-input').value

    $('text-background-color').innerText = color.toUpperCase()
    $('top-text').style.backgroundColor = color
    $('bottom-text').style.backgroundColor = color
  } else {
    $('top-text').style.backgroundColor = 'transparent'
    $('bottom-text').style.backgroundColor = 'transparent'
  }
}

const actualizarPosicionTexto = () => {
  if ($('text-no-background-checkbox').checked) {
    $('top-text').style.position = 'absolute'
    $('bottom-text').style.position = 'absolute'
  } else {
    $('top-text').style.position = 'static'
    $('bottom-text').style.position = 'static'
  }
}

//esta funcion cambia el contorno del texto
const actualizarContorno = (contorno) => {
  const grosor = '2px';

  if (contorno === 'ninguno') {
    document.getElementById('top-text').style.textShadow = 'none';
    document.getElementById('bottom-text').style.textShadow = 'none';
  } else if (contorno === 'claro') {
    document.getElementById('top-text').style.textShadow = `0 0 4px #FFF, 0 0 4px #FFF, 0 0 4px #FFF, 0 0 4px #FFF`;
    document.getElementById('bottom-text').style.textShadow = `0 0 4px #FFF, 0 0 2px #FFF, 0 0 1px #FFF, 0 0 4px #FFF`;
  } else if (contorno === 'oscuro') {
    document.getElementById('top-text').style.textShadow = `0 0 4px #000, 0 0 4px #000, 0 0 4px #000, 0 0 4px #000`;
    document.getElementById('bottom-text').style.textShadow = `0 0 4px #000, 0 0 4px #000, 0 0 4px #000, 0 0 4px #000`;
  }
}

//ajusta espaciado
const actualizarEspaciado = () => {
  const paddingY = $('padding-input').value
  $('top-text').style.padding = `${paddingY}px 50px`
  $('bottom-text').style.padding = `${paddingY}px 50px`
}

//ajusta interlineado
const actualizarInterlineado = () => {
  const lineHeight = $('line-height-input').value
  $('top-text').style.lineHeight = lineHeight
  $('bottom-text').style.lineHeight = lineHeight
}

const ajustarTexto = () => {
  if (window.innerWidth > 1100) {
    return
  }

  const tamanioTexto = Math.round((window.innerWidth / 10) * 0.5)
  const padding = Math.round((window.innerWidth / 10) * 0.2)

  $('text-size-input').value = tamanioTexto
  $('padding-input').value = padding

  actualizarEspaciado()
  actualizarTamanioTexto()
}
//este es el inicializdor para texto
const inicializarTexto = () => {
  $('top-text-input').addEventListener('input', actualizarTextos) //inicializador para editar texto superior
  $('bottom-text-input').addEventListener('input', actualizarTextos)

  $('no-top-text-checkbox').addEventListener('change', alternarTextos) //inicializador para eliminar texto superior
  $('no-bottom-text-checkbox').addEventListener('change', alternarTextos)

  $('text-font-select').addEventListener('change', actualizarFuente)

  $('text-size-input').addEventListener('input', actualizarTamanioTexto)
  $('text-left-align-button').addEventListener('click', () =>
    alinearTexto('left'))
  $('text-center-align-button').addEventListener('click', () =>
    alinearTexto('center'))
  $('text-right-align-button').addEventListener('click', () =>
    alinearTexto('right'))

  $('text-color-input').addEventListener('input', actualizarColorTexto) // arranca inicializador que cambia color
  $('text-background-color-input').addEventListener(
    'input',
    actualizarFondoTexto)
  $('text-no-background-checkbox').addEventListener('change', () => {
    actualizarFondoTexto()
    actualizarPosicionTexto()
  })

  $('no-outline-button').addEventListener('click', () => { //arranca inicializador para borde de letras
    actualizarContorno('ninguno')
  })
  $('light-outline-button').addEventListener('click', () => {
    actualizarContorno('claro')
  })
  $('dark-outline-button').addEventListener('click', () => {
    actualizarContorno('oscuro')
  })

  $('padding-input').addEventListener('input', actualizarEspaciado)

  $('line-height-input').addEventListener('change', actualizarInterlineado)

  window.addEventListener('resize', ajustarTexto)
  
}

//------------------------------------ Inicializar todos los eventos----------------------------------

const inicializarValores = () => {
  ajustarImagen()
  actualizarFuente()
  actualizarColorTexto()
  actualizarFondoTexto()
  actualizarPosicionTexto()
  ajustarTexto()
}

const inicializar = () => {
  inicializarTemas()
  inicializarImagen()
  inicializarPaneles()
  inicializarTexto()
  inicializarValores()

  $('download-meme-button').addEventListener('click', descargarMeme)
}
window.onload = inicializar
let incrementarButton = document.getElementById('incrementarButton');

let incremento =
  localStorage.getItem('incremento') == null
    ? { valor: 1 }
    : JSON.parse(localStorage.getItem('incremento'));
//  condicao ? verdadeira : falsa
// if (localStorage.getItem('incremento') == null) {
// }

let j = 1;

window.onload = (event) => { //alteração: mover a açao inicial da lista para onload
  while (j < incremento.valor) {
    // Recuperar o elemento da lista desordenada
    let itensUl = document.getElementById('itensUl');
    // Adicionar o item com o valor do incremento da lista desordenada.
    itensUl.insertAdjacentHTML('beforeend', `<li>${j}</li>`);
    j++;
  }
};

// Evento de click do botão incrementar.
incrementarButton.onclick = (event) => {
  // Recuperar o elemento da lista desordenada
  let itensUl = document.getElementById('itensUl');
  // Adicionar o item com o valor do incremento da lista desordenada.
  itensUl.insertAdjacentHTML('beforeend', `<li>${incremento.valor}</li>`);

  // Guardar o valor do incremento numa estrutura de armazenamento: local storage.
  // O valor deverá ser persistido em formato json através de uma string.
  incremento.valor++;
  localStorage.setItem('incremento', JSON.stringify(incremento));
};

incrementarButton.onmouseover = (event) => {
  incrementarButton.style.backgroundColor = 'blue';
};

incrementarButton.onmouseout = (event) => {
  incrementarButton.style.backgroundColor = 'gray';
};

incrementarButton.addEventListener('dblclick', (event) => {
  console.log('Clicou no dblclick');
});
// callback

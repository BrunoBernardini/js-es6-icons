/*
**Milestone 1**
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

**Milestone 2**
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

**Milestone 3**
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

**BONUS**
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
 */

const outputContainer = document.querySelector(".row");
const typeSelector = document.getElementById("icon-type");

const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const types = [];
iconsList.forEach((icon) =>{
  if(!types.includes(icon.type)) types.push(icon.type);
});

generateRandomColorPerType(types, iconsList);

printIconsList(outputContainer, iconsList);
typeSelector.addEventListener("change", function(){
  const filteredIconsList = filterArray(iconsList, typeSelector.value);
  printIconsList(outputContainer, filteredIconsList);
});

/**
 * Stampa la lista di icone nel target selezionato
 * @param {HTMLDivElement} target 
 * @param {Array} list 
 */
function printIconsList(target, list){
  target.innerHTML = "";
  for(let icon of list){
    target.innerHTML += `
    <div class="col d-flex justify-content-center align-items-center py-4">
      <div class="icon-card">
        <i class="${icon.family} ${icon.prefix+icon.name}" style="color: ${icon.color}"></i>
        <h4>${icon.name}</h4>
      </div>
    </div>`;
  };
}

/**
 * Filtra un array in base a una parola.
 * @param {Array} arrayToFilter 
 * @param {string} word 
 * @returns 
 */
function filterArray(arrayToFilter, word){
  return arrayToFilter.filter((icon) => (icon.type===word)||(word==="all"));
}

/**
 * Assegna dei colori random ad ogni elemento della lista per ogni categoria contenuta nell'array di tipi.
 * @param {Array} types 
 * @param {Array} list 
 */
function generateRandomColorPerType(types, list){
  for(let type of types){
    const randomColor = generateRandomHexColor();
    for(let listElement of list){
      if(listElement.type===type) listElement.color = randomColor;
    }
  }
}

/**
 * Genera un valore random esadecimale a 6 cifre (utilizzabile come colore).
 * @returns 
 */
function generateRandomHexColor(){
  const letters = ["A", "B", "C", "D", "E", "F"]
  let randomHex = "#";
  for(let i=0; i<6; i++){
    const tempRandom = Math.floor(Math.random()*15);
    if(tempRandom>9) randomHex += letters[tempRandom-10];
    else randomHex += tempRandom;
  }
  return randomHex;
}
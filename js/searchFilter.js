const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];


const inputEL = document.querySelector('#filter')
const ulEl = document.querySelector('.js-list')

const listItemMurcap =  createdListItems(tech)

// создаем разметку 
function createdListItems(item) {
  return  item.map(t =>
    `<li>${t.label}</li>`
  ).join('')
  
}

// добавляем разметку в Ul HTML
ulEl.innerHTML = listItemMurcap

// добавляем слушатель событий на input
inputEL.addEventListener('input', _.debounce(onFilterChange, 300))

// создаем логику фильтра
function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase()
  const filteredItem = tech.filter(t => t.label.toLowerCase().includes(filter))
  // передаем в ф-ю рендера наш отфильтрованый массив
  const listItemMurcap = createdListItems(filteredItem)
  // добавляем разметку в Ul HTML
  ulEl.innerHTML = listItemMurcap

}

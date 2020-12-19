import itemsTemplate from '../templates/gallery-items.hbs'
import menu from '../menu.json'

const markup = itemsTemplate(menu)
const galleryRef = document.querySelector('.js-menu')

galleryRef.insertAdjacentHTML('beforeend', markup)
import { homepage } from './pages/home.js'
import { adminpage } from './pages/admin.js'
import { aboutpage } from './pages/About.js'
import { contactpage } from './pages/Contact.js'
const routes = {
'/': homepage,
'/admin': adminpage,
'/about':aboutpage,
'/contact':contactpage,
}
function render() {
const path = location.hash.slice(1) || '/'
const page = routes[path] || HomePage
document.querySelector('#app').innerHTML = page()
}
window.addEventListener('hashchange', render)
render()
import { homepage } from './pages/home.js'
import { adminpage } from './pages/admin.js'
const routes = {
'/': homepage,
'/admin': adminpage,
}
function render() {
const path = location.hash.slice(1) || '/'
const page = routes[path] || HomePage
document.querySelector('#app').innerHTML = page()
}
window.addEventListener('hashchange', render)
render()
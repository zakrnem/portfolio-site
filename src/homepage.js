import { footer } from 'footer-zkrnem'
import { header } from './header'

export function homepage() {
    footer()
    header()
    const content = document.getElementById('content')
    content.textContent = 'Hello World!'
}
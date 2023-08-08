import { footer } from 'footer-zkrnem'

export function homepage() {
    footer()
    const content = document.getElementById('content')
    content.textContent = 'Hello World!'
}
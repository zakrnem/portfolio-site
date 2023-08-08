export function header() {
    const body = document.querySelector('body')
    const content = document.getElementById('content')
    const header = document.createElement('header')

    const about = document.createElement('button')
    about.textContent = 'About me'

    const work = document.createElement('button')
    work.textContent = 'Work'

    const contact = document.createElement('button')
    contact.textContent = 'Contact'

    header.append(about, work, contact)
    body.insertBefore(header, content)
}
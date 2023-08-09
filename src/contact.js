import { contactForm } from './contactForm'
import { newChannel } from './newChannel'

export function contact() {
  const body = document.querySelector('body')
  const content = document.getElementById('content')
  const contact = document.createElement('section')
  contact.className = 'contact'

  const title = document.createElement('h2')
  title.textContent = 'Contact me:'

  const channels = document.createElement('div')
  channels.className = 'contact-channels'

  const form = document.createElement('form')
  form.className = 'contact-form'

  contact.append(title, channels, form)
  body.insertBefore(contact, content)

  newChannel('./imgs/email-svgrepo-com.svg', 'zakrnem@notrealemail.com')
  newChannel('./imgs/phone-svgrepo-com.svg', '+090 0000 1010')
  newChannel('./imgs/linkedin-svgrepo-com.svg' /* , `Zakrnem's Linkedin` */)
  newChannel('./imgs/github-svgrepo-com.svg' /* , `Zakrnem's Github` */)
  contactForm()
}

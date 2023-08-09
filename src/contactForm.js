export function contactForm() {
  const nameLabel = document.createElement('label')
  nameLabel.setAttribute('for', 'name')

  const nameInput = document.createElement('input')
  nameInput.setAttribute('type', 'text')
  nameInput.setAttribute('placeholder', 'Your Name')

  const mailLabel = document.createElement('label')
  mailLabel.setAttribute('for', 'email')

  const mailInput = document.createElement('input')
  mailInput.setAttribute('type', 'email')
  mailInput.setAttribute('placeholder', 'Your Email')

  const messageLabel = document.createElement('label')
  messageLabel.setAttribute('for', 'text')

  const messageInput = document.createElement('input')
  messageInput.className = 'message-input'
  messageInput.setAttribute('type', 'text')
  messageInput.setAttribute('placeholder', 'Your message.')

  const submit = document.createElement('button')
  submit.textContent = 'Send message'

  const form = document.querySelector('.contact-form')
  form.append(nameLabel, nameInput, mailLabel, mailInput, messageLabel, messageInput, submit)
}

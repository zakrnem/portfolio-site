export function newChannel(iconSrc, channelText) {
  const channel = document.createElement('div')
  const icon = document.createElement('img')
  icon.src = iconSrc

  const text = document.createElement('p')
  text.textContent = channelText
  channel.append(icon, text)
  const channels = document.querySelector('.contact-channels')
  channels.append(channel)
}

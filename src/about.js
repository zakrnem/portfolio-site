export function about() {
  const body = document.querySelector('body')
  const content = document.getElementById('content')
  const about = document.createElement('section')
  about.className = 'about'

  const imageSide = document.createElement('div')
  imageSide.className = 'about-image'

  const userImage = document.createElement('img')
  userImage.className = 'user-headshot'
  userImage.src = './imgs/pexels-filipp-romanovski-17728935.jpg'
  userImage.alt = 'Zakr Nem headshot'
  imageSide.append(userImage)

  const title = document.createElement('h1')
  title.textContent = 'Zakr Nem'

  const description = document.createElement('p')
  description.textContent = `I'm currently studying to become a Full Stack Developer.`

  const textSide = document.createElement('div')
  textSide.append(title, description)

  about.append(imageSide, textSide)
  body.insertBefore(about, content)
}

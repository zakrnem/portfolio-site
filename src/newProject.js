export function newProject(imgSrc, imgAlt, projTitle, projDescription) {
    const container = document.createElement('div')
    container.className = 'project'
  
    const snapshot = document.createElement('img')
    snapshot.src = imgSrc
    snapshot.alt = imgAlt

    const title = document.createElement('h3')
    title.textContent = projTitle
  
    const description = document.createElement('p')
    description.textContent = projDescription
  
    container.append(title, snapshot, description)
  
    const portfolio = document.querySelector('.portfolio')
    console.log(portfolio)
    portfolio.append(container)
  }
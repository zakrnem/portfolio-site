import { newProject } from "./newProject"

export function work() {
  const body = document.querySelector('body')
  const content = document.getElementById('content')
  const work = document.createElement('section')
  work.className = 'work'

  const title = document.createElement('h2')
  title.textContent = 'My projects:'

  const portfolio = document.createElement('div')
  portfolio.className = 'portfolio'

  work.append(title, portfolio)
  body.insertBefore(work, content)

  newProject('../src/examples/doriandominguez.com.png', `Dorian's Portfolio`, 'Dorian', `He's a Youtuber that makes videos about web development.`)
  newProject('../src/examples/rishabhdeveloper.me.png', `Rish's Portfolio`, 'Rish Abh', `He's a random guy from TOP.`)
  newProject('../src/examples/portfolio.png', `Portfolio example`, 'PC Version', 'This is the example for a computer display.')
  newProject('../src/examples/portfolio mobile.png', `Portfolio example`, 'Mobile Version', 'This is the example for a mobile display.')
  newProject('../src/examples/portfolio tablet.png', `Portfolio example`, 'Tablet Version', 'This is the example for a tablet display.')
}
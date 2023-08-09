import { footer } from 'footer-zkrnem'
import { header } from './header'
import { about } from './about'
import { work } from './work'
import { contact } from './contact'

export function homepage() {
  header()
  about()
  work()
  contact()
  footer()
}

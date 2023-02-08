import { ReactComponent as Logo } from './assets/Corinna Dinkel-01.svg'
import { Bars3Icon as BurgerMenu } from '@heroicons/react/24/outline'

export const Header = () => {
  return (
    <div className="flex items-end">
      <Logo className="h-[200px]" />
      <BurgerMenu className="h-[60px] pb-4" />
    </div>
  )
}

import { ReactComponent as Logo } from './assets/Corinna Dinkel-01.svg'
import { ContentArea } from './ContentArea'
import { Menu } from './Menu'

export const App = () => {
  return (
    <div id="top" className="flex h-full w-full flex-col items-center justify-center overflow-auto">
      <Menu />
      <Logo className="h-[200px]" />
      <ContentArea />
    </div>
  )
}

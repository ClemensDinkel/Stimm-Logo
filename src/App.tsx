import { ReactComponent as Logo } from './assets/Corinna Dinkel-01.svg'
import { ContentArea } from './ContentArea'
import { Menu } from './Menu'
import { sectionLinks } from './sectionLinks'
import './index.css'
import { Footer } from './Footer'

// todo export standard like color and text size to css file later
export const App = () => {
  return (
    <div id={sectionLinks.home} className="mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center overflow-auto text-lg text-[#56070C]">
      <Menu />
      <Logo className="h-[200px]" />
      <ContentArea />
      <Footer />
    </div>
  )
}

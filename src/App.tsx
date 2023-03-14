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
      <div className='w-full p-8'>
        <div className='rounded-lg border-4 border-dashed border-red-400 bg-red-400/10 p-2 text-center font-bold'>Work in Progress</div>
      </div>
      <ContentArea />
      <Footer />
    </div>
  )
}

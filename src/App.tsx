import { ReactComponent as Logo } from './assets/Corinna Dinkel-01.svg'
import { ContentArea } from './ContentArea'
import { Menu } from './Menu'
import { sectionLinks } from './sectionLinks'

// todo export standard like color and text size to css file later
export const App = () => {
  return (
    <div id={sectionLinks.home} className="flex h-full w-full flex-col items-center justify-center overflow-auto text-lg text-[#56070C]">
      <Menu />
      <Logo className="h-[200px]" />
      <div className='m-2 rounded-lg border-2 border-dashed border-red-400 p-2 font-bold'>Work in Progress</div>
      <ContentArea />
    </div>
  )
}

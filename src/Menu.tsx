import { Popover } from '@headlessui/react'
import 

export const Menu = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="fixed right-0 top-0 rounded-lg bg-white/80">
        <BurgerMenu className='h-[60px]' />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className='flex flex-col'>
          <a href="http://127.0.0.1:5173/a">Test A</a>
          <a href="http://127.0.0.1:5173/b">Test B</a>
          <a href="http://127.0.0.1:5173/c">Test C</a>
          <a href="http://127.0.0.1:5173/d">Test D</a>
          <a href="http://127.0.0.1:5173/e">Test D</a>
        </div>
      </Popover.Panel>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id laudantium, ex facere natus adipisci neque pariatur totam, maxime maiores error enim possimus perspiciatis cupiditate odit? Perspiciatis impedit dolore laudantium.</p>
    </Popover>
  )
}

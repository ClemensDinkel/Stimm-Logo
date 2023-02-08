import { Popover } from '@headlessui/react'
import { Bars3Icon as BurgerMenu } from '@heroicons/react/24/outline'

export const Menu = () => {
  return (
    <Popover className="fixed top-0 flex w-full flex-col">
      <Popover.Button className="w-fit self-end rounded-lg bg-white/80">
        <BurgerMenu className='h-[60px]' />
      </Popover.Button>
      <Popover.Panel className="z-10 bg-white">
        <div className='flex flex-col'>
          <a href="http://127.0.0.1:5173/a">Test A</a>
          <a href="http://127.0.0.1:5173/b">Test B</a>
          <a href="http://127.0.0.1:5173/c">Test C</a>
          <a href="http://127.0.0.1:5173/d">Test D</a>
          <a href="http://127.0.0.1:5173/e">Test D</a>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

import { Popover } from '@headlessui/react'
import { Bars3Icon as BurgerMenu } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
export const Menu = () => {
  return (
    <Popover className="fixed top-0 flex w-full flex-col">
      {({ open, close }) => (
        <div className={clsx('flex w-full flex-col', { 'bg-white/90': open })}>
          <Popover.Button className="z-20 mr-4 w-fit self-end rounded-lg bg-white/80">
            <BurgerMenu className='h-[60px]' />
          </Popover.Button>
          <Popover.Panel className="z-10 rounded-lg p-4">
            <div className='flex flex-wrap gap-8'>
              <div className='flex gap-8'>
                <a href="#top" onClick={close}>Link A</a>
                <a href="#a" onClick={close}>Link B</a>
              </div>
              <div className='flex gap-8'>
                <a href="#b" onClick={close}>Link C</a>
                <a href="#b" onClick={close}>Link D</a>
              </div>
              <div className='flex gap-8'>
                <a href="#c" onClick={close}>Link E</a>
                <a href="#c" onClick={close}>Link F</a>
              </div>
            </div>
          </Popover.Panel>
        </div>
      )}
    </Popover>
  )
}

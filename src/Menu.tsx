import { Popover } from '@headlessui/react'
import { Bars3Icon as BurgerMenu } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

export const Menu = () => {
  return (
    <Popover className="fixed top-0 flex w-full flex-col">
      {({ open, close }) => (
        <div className={clsx('flex w-full flex-col rounded-b-lg', { 'bg-[#56070C] text-white': open })}>
          <Popover.Button className={clsx('z-20 mr-4 w-fit self-end rounded-lg', {
            'bg-[#56070C]': open,
            'bg-white/80': !open
          })}>
            <BurgerMenu className='h-[60px]' />
          </Popover.Button>
          <Popover.Panel className="z-10 rounded-lg p-4">
            <div className='flex flex-wrap gap-8'>
              <div className='flex gap-8'>
                <a href="#home" onClick={close}>Home</a>
                <a href="#stimmcoaching" onClick={close}>Stimmcoaching</a>
              </div>
              <div className='flex gap-8'>
                <a href="#logopaedie" onClick={close}>Logopädie</a>
                <a href="#vortraege" onClick={close}>Vorträge & Workshops</a>
              </div>
              <div className='flex gap-8'>
                <a href="#ueber" onClick={close}>Über mich</a>
                <a href="#anfahrt" onClick={close}>Anfahrt</a>
              </div>
              <div className='flex gap-8'>
                <a href="#impressum" onClick={close}>Impressum</a>
              </div>
            </div>
          </Popover.Panel>
        </div>
      )}
    </Popover>
  )
}

import { Popover } from '@headlessui/react'
import { Bars3Icon as BurgerMenu } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { sectionLinks } from './sectionLinks'

export const Menu = () => {
  return (
    <Popover className="fixed top-0 right-0 flex w-full flex-col">
      {({ open, close }) => (
        <div className={clsx('flex w-full flex-col rounded-b-lg', { 'bg-[#56070C]/95 text-white': open })}>
          <Popover.Button className={clsx('z-20 mr-4 w-fit self-end rounded-lg', {
            'bg-[#56070C]': open,
            'bg-white/80': !open
          })}>
            <BurgerMenu className='h-[60px]' />
          </Popover.Button>
          <Popover.Panel className="z-10 rounded-lg p-4">
            <div className='flex flex-wrap justify-center gap-8'>
              <div className='flex gap-8'>
                <a href={'#' + sectionLinks.home} onClick={close}>Home</a>
                <a href={'#' + sectionLinks.stimmCoaching} onClick={close}>Stimmcoaching</a>
              </div>
              <div className='flex gap-8'>
                <a href={'#' + sectionLinks.logopaedie} onClick={close}>Logopädie</a>
                <a href={'#' + sectionLinks.vortraege} onClick={close}>Vorträge & Workshops</a>
              </div>
              <div className='flex gap-8'>
                <a href={'#' + sectionLinks.ueber} onClick={close}>Über mich</a>
                <a href={'#' + sectionLinks.anfahrt} onClick={close}>Anfahrt</a>
              </div>
              <div className='flex gap-8'>
                <a href={'#' + sectionLinks.impressum} onClick={close}>Impressum</a>
                <a href={'#' + sectionLinks.datenschutz} onClick={close}>Datenschutz</a>

              </div>
            </div>
          </Popover.Panel>
        </div>
      )}
    </Popover>
  )
}

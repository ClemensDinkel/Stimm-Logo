import { Icon } from './components/Image'

export const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-center gap-2 rounded-t-lg bg-gradient-to-t from-[#56070C]/95 via-[90%] to-[#56070C]/0 py-4 px-2 text-xs text-white">
      <a href="tel:+497433383443" className='flex w-fit items-center gap-2'>
        <Icon src='/Icon_Telefon.png' alt="Telefon" />
        <div>+49 (0) 7433/383443</div>
      </a>
      <a href="mailto:info@stimmcoaching-logopaedie.de" className='flex w-fit items-center gap-2'>
        <Icon src='/Icon_E-Mail.png' alt="Email" />
        info@&#8203;stimmcoaching-&#8203;logopaedie.de
      </a>
    </div>
  )
}

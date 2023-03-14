import { Icon } from './components/Image'

export const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-center gap-4 rounded-t-lg bg-[#56070C]/95 p-4 text-xs text-white">
      <Icon src='/Icon_Telefon.png' alt="Telefon" /><span>+49 (0) 7433/383443</span>
      <Icon src='/Icon_E-Mail.png' alt="Email" /><span>info@stimmcoaching-logopaedie.de</span>
    </div>
  )
}

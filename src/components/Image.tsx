import { clsx } from 'clsx'

export enum IconSize {
  xs = 'extra-small',
  sm = 'small',
  md = 'medium',
  default = 'default'
}

interface ImageFrameProps {
  src: string;
  alt: string;
  size?: IconSize;
}
interface IconFrameProps {
  src: string;
  alt: string;
  size?: IconSize;
}

const sizeToClass = (size: IconSize = IconSize.default) => {
  switch (size) {
    case IconSize.xs: return clsx('w-[80px]')
    case IconSize.sm: return clsx('w-[180px]')
    case IconSize.md: return clsx('w-[280px]')
    default: return undefined
  }
}

export const Image = ({ src, size, alt }: ImageFrameProps) => <img className={clsx('rounded-lg', sizeToClass(size))} src={src} alt={alt} />
export const Icon = ({ src, alt }: IconFrameProps) => <img className='h-[40px] rounded-full border border-white' src={src} alt={alt} />

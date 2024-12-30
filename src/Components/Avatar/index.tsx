import Image from 'next/image'
import { AvatarBorder } from './styles'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
export interface AvatarProps {
  src: string | StaticImport
  width: number
  height: number
  alt?: string
}

export function Avatar({ src, width, height, alt }: AvatarProps) {
  return (
    <AvatarBorder style={{ width: width + 2, height: height + 2 }}>
      <Image
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        quality={100}
      />
    </AvatarBorder>
  )
}

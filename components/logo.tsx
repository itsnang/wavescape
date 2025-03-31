import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-40 h-40">
      <Image
        src="wavescape-second.png"
        alt="SDFM 2520"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}


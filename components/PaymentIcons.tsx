import React from 'react'
import Image from 'next/image'

export default function PaymentIcons() {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
        <Image
          src="/images/icons/sol.png"
          alt="SOL"
          width={32}
          height={32}
        />
      </div>
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
        <Image
          src="/images/icons/usdc.png"
          alt="USDC"
          width={32}
          height={32}
        />
      </div>
    </div>
  )
} 
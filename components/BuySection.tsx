import React, { useState } from 'react'
import { CONTRACT_ADDRESS, PUMP_URL } from '../utils/constants'

export default function BuySection() {
  const [showCopyNotification, setShowCopyNotification] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setShowCopyNotification(true)
    setTimeout(() => setShowCopyNotification(false), 2000)
  }

  return (
    <section className="py-20 bg-navy-950" id="how-to-buy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Buy Now on the Solana Blockchain!
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <a 
              href={PUMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-4 px-6 rounded-lg text-center font-bold hover:bg-primary/90 transition"
            >
              BUY NOW ON
              <br />
              PUMP.FUN
            </a>
            <a 
              href={PUMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-4 px-6 rounded-lg text-center font-bold hover:bg-primary/90 transition"
            >
              BUY NOW ON
              <br />
              PUMP.FUN
            </a>
          </div>

          <div className="bg-navy-900/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Solana Contract Address</h3>
            <div className="relative">
              <div className="flex items-center gap-4 bg-navy-950 p-4 rounded">
                <code className="flex-1 font-mono text-sm md:text-base">
                  {CONTRACT_ADDRESS}
                </code>
                <button 
                  onClick={copyAddress}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded font-bold whitespace-nowrap"
                >
                  Copy Address
                </button>
              </div>
              {/* Notification appears under the copy button */}
              <div className={`absolute left-0 right-0 mt-2 bg-green-500 text-white px-4 py-2 rounded text-center transition-all duration-300 ${
                showCopyNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                Contract Address Copied!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
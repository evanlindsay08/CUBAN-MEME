import React, { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const address = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    setShowCopyNotification(true)
    setTimeout(() => setShowCopyNotification(false), 2000)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-navy-900 text-white overflow-hidden">
      {/* Animated flag background */}
      <div className="flag-background" />
      <div className="stars-overlay" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-8">
          THE ONLY
          <span className="text-primary block my-2">OFFICIAL</span>
          CUBAN MEME
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-12">
          Join the Cuban Community. This is Innovation in the Making!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-navy-950/80 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Solana Contract Address</h3>
            <div className="relative">
              <div className="flex items-center gap-4 bg-navy-900/50 p-4 rounded">
                <code className="flex-1 font-mono text-sm md:text-base">
                  {address}
                </code>
                <button 
                  onClick={copyAddress}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded font-bold whitespace-nowrap"
                >
                  Copy Address
                </button>
              </div>
              <div className={`absolute left-0 right-0 mt-2 bg-green-500 text-white px-4 py-2 rounded text-center transition-all duration-300 ${
                showCopyNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}>
                Contract Address Copied!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
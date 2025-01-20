import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PUMP_URL } from '../utils/constants'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy-950/80 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/mark.png"
              alt="Cuban Meme"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">CUBAN MEME</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-primary transition">
              Home
            </Link>
            <Link href="#how-to-buy" className="text-white hover:text-primary transition">
              How to Buy
            </Link>
            <a
              href={PUMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded font-bold transition"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 
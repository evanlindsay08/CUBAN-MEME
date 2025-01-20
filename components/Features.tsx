import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-4">
            CUBAN:
            <br />
            THE CRYPTO SHARK
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-primary">
            A Community Celebrating Innovation & Success
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/mark.png"
              alt="Mark Cuban"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-white space-y-6">
            <p className="text-2xl font-bold">
              $CUBAN tokens are now freely tradeable on the blockchain.
            </p>
            <p className="text-lg opacity-90">
              Mark Cuban, with a net worth of $6.2B, represents the pinnacle of entrepreneurial success. 
              From selling garbage bags door-to-door to becoming a tech pioneer and NBA team owner, 
              Cuban embodies the American Dream.
            </p>
            <p className="text-lg opacity-90">
              Now, you can get your piece of history. This Cuban Meme celebrates a leader who 
              revolutionized multiple industries and continues to inspire millions. Join the Cuban 
              Community - we're all about innovation and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 
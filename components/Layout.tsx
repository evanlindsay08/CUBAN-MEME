import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-navy-900">
      <Head>
        <title>CUBANMEME - The Only Official Mark Cuban Meme</title>
        <meta name="description" content="Join the Cuban Community. This is Innovation in the Making!" />
        <link rel="icon" href="/images/mark.png" />
      </Head>

      <Navbar />
      
      <main>
        {children}
      </main>

      <footer className="bg-navy-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            Cuban Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by Mark Cuban and the associated artwork.
          </p>
        </div>
      </footer>
    </div>
  )
} 
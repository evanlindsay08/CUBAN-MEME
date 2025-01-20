import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import BuySection from '../components/BuySection'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <Layout>
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <Features />
        <BuySection />
        <FAQ />
      </div>
    </Layout>
  )
} 
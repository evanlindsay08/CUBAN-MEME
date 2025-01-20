import React from 'react'

export default function Allocation() {
  return (
    <section className="py-20 bg-navy-900" id="allocation">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Allocation
        </h2>
        
        <div className="text-center text-white mb-8">
          <p className="text-xl">
            There are 200 million $CUBAN available on day one and will grow to a total of 1 billion $CUBAN over three years.
          </p>
          <p className="text-lg mt-4">
            Each group's allocation are released on their own schedule over 3 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-navy-950 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Token Distribution</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-white">
                <span>Mark Cuban</span>
                <span>50%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Community Rewards</span>
                <span>20%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Development</span>
                <span>15%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Marketing</span>
                <span>10%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Team</span>
                <span>5%</span>
              </div>
            </div>
          </div>

          <div className="bg-navy-950 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Project Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-white">
                <span>Total Groups</span>
                <span>5</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Vesting Period</span>
                <span>36 months</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Initial Supply</span>
                <span>200M</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Max Supply</span>
                <span>1B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
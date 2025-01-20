import React, { useState } from 'react'
import { CONTRACT_ADDRESS } from '../utils/constants'

interface FAQItem {
  question: string;
  answer: string;
}

const address = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

const faqItems: FAQItem[] = [
  {
    question: "Who is Mark Cuban?",
    answer: "Mark Cuban is a renowned billionaire entrepreneur, investor, and owner of the Dallas Mavericks NBA team. With a net worth of $6.2B, he rose from humble beginnings selling garbage bags door-to-door to becoming a tech pioneer and one of the most recognizable 'sharks' on Shark Tank. Known for his innovative thinking and bold investments in cryptocurrency and blockchain technology, Cuban represents the pinnacle of entrepreneurial success."
  },
  {
    question: "What is the official contract address and symbol for the Cuban Meme?",
    answer: `The official contract address is ${CONTRACT_ADDRESS} and the symbol is $CUBAN. Always verify the contract address to ensure you're interacting with the genuine Cuban Meme token.`
  },
  {
    question: "How can I get Cuban Memes?",
    answer: "You can purchase $CUBAN tokens directly through PUMP.FUN or Raydium on the Solana blockchain. Make sure to connect your Solana wallet and verify the contract address before making any transactions."
  },
  {
    question: "What is the total supply and distribution of $CUBAN?",
    answer: "The total supply is 1 billion $CUBAN tokens. 50% of the supply (500 million tokens) is allocated to Mark Cuban himself."
  },
  {
    question: "Is this an official Mark Cuban product?",
    answer: "Cuban Memes are intended to function as an expression of support for Mark Cuban and his entrepreneurial spirit. While 50% of the supply is allocated to Mark Cuban, this token is a community-driven initiative celebrating his impact on business and technology."
  },
  {
    question: "What makes Cuban Meme special?",
    answer: "Cuban Meme celebrates the entrepreneurial spirit and innovation that Mark Cuban represents. By allocating 50% of the supply to Mark Cuban himself, we're creating a unique connection between the community and one of the most successful entrepreneurs of our time."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-navy-900" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-navy-950 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left text-white font-semibold flex justify-between items-center hover:bg-navy-900/50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-white/80">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
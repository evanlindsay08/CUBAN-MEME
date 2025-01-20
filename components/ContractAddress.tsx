export default function ContractAddress() {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN"
  
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    // Add toast notification here
  }

  return (
    <div className="bg-navy-900 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Solana Contract Address</h2>
      
      <div className="flex items-center gap-4 bg-navy-950 p-4 rounded">
        <div className="bg-gray-800 px-2 py-1 rounded">CA</div>
        <code className="flex-1">{contractAddress}</code>
        <button 
          onClick={copyAddress}
          className="bg-cuban-blue px-4 py-2 rounded"
        >
          Copy Address
        </button>
      </div>
    </div>
  )
} 
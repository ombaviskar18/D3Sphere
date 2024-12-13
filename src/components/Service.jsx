import React, { useState } from 'react';

const Service = () => {
  const [forwardInput, setForwardInput] = useState('');
  const [reverseInput, setReverseInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleForwardResolution = () => {
    setError('');
    if (!forwardInput.includes('.')) {
      setError('Invalid DNS name. Example: mywallet.com');
      return;
    }
    // Example logic for forward resolution
    const walletAddress = `Resolved Wallet Address: ${forwardInput.replace('.', '')}12345abcd`;
    setOutput(walletAddress);
  };

  const handleReverseResolution = () => {
    setError('');
    if (!reverseInput.match(/^0x[a-fA-F0-9]{40}$/)) {
      setError('Invalid wallet address. Example: 0x123456789abcdef123456789abcdef1234567890');
      return;
    }
    // Example logic for reverse resolution
    const dnsName = `Resolved DNS Name: wallet${reverseInput.slice(2, 6)}.com`;
    setOutput(dnsName);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-40">
      <div className="text-center text-neutral-400 text-5xl">🌐 Welcome to D3Sphere 🌐</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-28">
        {/* Forward Resolution Card */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-neutral-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Forward Resolution</h3>
            <p className="text-neutral-400 mb-4">
              Convert DNS names to wallet addresses for user-friendly transactions.
            </p>
            <input
              type="text"
              placeholder="Enter DNS name (e.g., mywallet.com)"
              value={forwardInput}
              onChange={(e) => setForwardInput(e.target.value)}
              className="w-full py-2 px-4 mb-4 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleForwardResolution}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-xl"
            >
              Convert
            </button>
          </div>
        </div>

        {/* Reverse Resolution Card */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col items-center hover:bg-neutral-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Reverse Resolution</h3>
            <p className="text-neutral-400 mb-4">
              Map wallet addresses back to DNS names for easy identification.
            </p>
            <input
              type="text"
              placeholder="Enter Wallet Address (e.g., 0x123456789abcdef123456789abcdef1234567890)"
              value={reverseInput}
              onChange={(e) => setReverseInput(e.target.value)}
              className="w-full py-2 px-4 mb-4 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleReverseResolution}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-xl"
            >
              Convert
            </button>
          </div>
        </div>
      </div>

      {/* Output Section */}
      {output && (
        <div className="mt-8 p-4 bg-neutral-800 text-white rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Output:</h4>
          <p>{output}</p>
        </div>
      )}

      {/* Error Section */}
      {error && (
        <div className="mt-8 p-4 bg-red-800 text-white rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Error:</h4>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Service;

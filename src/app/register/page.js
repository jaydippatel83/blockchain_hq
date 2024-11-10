// pages/register.js
'use client';
import { useState } from "react"; 
import { ethers } from "ethers";
import { useWallet } from "@/context/WalletContext";
import Navbar from "@/components/Navbar";

const Register = () => {
  const { walletAddress, connectWallet } = useWallet();
  const [isExpert, setIsExpert] = useState(false);
  const [name, setName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [fee, setFee] = useState("");
  const [feeType, setFeeType] = useState("0"); // 0: PerHalfHour, 1: PerHour, etc.

  const handleUserRegistration = async () => {
    if (!walletAddress) return alert("Please connect your wallet.");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    await registerUser(name, userAddress, signer);
    alert("User registered successfully!");
  };

  const handleExpertRegistration = async () => {
    if (!walletAddress) return alert("Please connect your wallet.");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const feeInWei = ethers.utils.parseEther(fee); // Convert fee to wei
    await registerExpert(feeInWei, parseInt(feeType), signer);
    alert("Expert registered successfully!");
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-full"
        >
          {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
        </button>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isExpert}
              onChange={() => setIsExpert(!isExpert)}
            />
            <span>Register as Expert</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {isExpert && (
          <>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Fee (ETH)</label>
              <input
                type="text"
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Fee Type</label>
              <select
                value={feeType}
                onChange={(e) => setFeeType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="0">Per Half Hour</option>
                <option value="1">Per Hour</option>
                <option value="2">Per Day</option>
                <option value="3">Per Week</option>
              </select>
            </div>
          </>
        )}

        <button
          onClick={isExpert ? handleExpertRegistration : handleUserRegistration}
          className="bg-green-500 text-white py-2 px-4 rounded w-full"
        >
          Register {isExpert ? "as Expert" : "as User"}
        </button>
      </div>
    </div>
    </>
  );
};

export default Register;

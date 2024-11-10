'use client'

// components/RegisterExpert.js
import { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const RegisterExpert = () => {
  const [fee, setFee] = useState("");
  const [feeType, setFeeType] = useState(0); // 0: PerHalfHour, 1: PerHour, etc.

  const registerExpert = async () => {
    if (!fee) return toast.error("Fee is required");

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = getContract(signer);

      const tx = await contract.registerExpert(ethers.parseEther(fee), feeType);
      await tx.wait();
      toast.success("Expert registered successfully");
    } catch (error) {
      toast.error("Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Register as Expert</h2>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
        placeholder="Fee in ETH"
        className="input"
      />
      <select
        value={feeType}
        onChange={(e) => setFeeType(e.target.value)}
        className="input"
      >
        <option value="0">Per Half Hour</option>
        <option value="1">Per Hour</option>
        <option value="2">Per Day</option>
        <option value="3">Per Week</option>
      </select>
      <button onClick={registerExpert} className="btn-primary">
        Register
      </button>
    </div>
  );
};

export default RegisterExpert;

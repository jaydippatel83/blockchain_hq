'use client'

// components/StartConsultation.js
import { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const StartConsultation = ({ expertAddress }) => {
  const [duration, setDuration] = useState(30); // in minutes

  const startConsultation = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = getContract(signer);

      // Assuming a fee calculation method exists
      const fee = await contract.calculateFee(expertAddress, duration * 60); // convert minutes to seconds

      const tx = await contract.startConsultation(expertAddress, duration * 60, {
        value: fee,
      });
      await tx.wait();
      toast.success("Consultation started");
    } catch (error) {
      toast.error("Failed to start consultation");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Start Consultation</h2>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration in minutes"
        className="input"
      />
      <button onClick={startConsultation} className="btn-primary">
        Start
      </button>
    </div>
  );
};

export default StartConsultation;

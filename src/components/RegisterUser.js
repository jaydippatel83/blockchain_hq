// components/RegisterUser.js
'use client'
import { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const registerUser = async () => {
    if (!name || !userAddress) return toast.error("All fields are required");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const contract = getContract(signer);

      const tx = await contract.registerUser(name, userAddress);
      await tx.wait();
      toast.success("User registered successfully");
    } catch (error) {
      toast.error("Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Register as User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="input"
      />
      <input
        type="text"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
        placeholder="Address"
        className="input"
      />
      <button onClick={registerUser} className="btn-primary">
        Register
      </button>
    </div>
  );
};

export default RegisterUser;

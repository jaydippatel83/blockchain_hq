import { ethers } from "ethers";
import {contractABI,contractAddress} from "./constant"; // Replace with your contract's ABI JSON file

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";

export const getBlockchainHQContract = (provider) => {
  return new ethers.Contract(contractAddress, contractABI, provider);
};

export const registerUser = async (name, userAddress, signer) => {
  const contract = getBlockchainHQContract(signer);
  const tx = await contract.registerUser(name, userAddress);
  await tx.wait();
  return tx;
};

export const registerExpert = async (fee, feeType, signer) => {
  const contract = getBlockchainHQContract(signer);
  const tx = await contract.registerExpert(fee, feeType);
  await tx.wait();
  return tx;
};
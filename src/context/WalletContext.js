import { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";

// Create the context
const WalletContext = createContext();

// Provider component
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Connect to wallet function
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const account = accounts[0];
        setWalletAddress(account);
        setIsConnected(true);

        // Listen for account changes
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          } else {
            setWalletAddress(null);
            setIsConnected(false);
          }
        });
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to use this feature.");
    }
  };

  useEffect(() => {
    if (walletAddress) {
      setIsConnected(true);
    }
  }, [walletAddress]);

  // Provide walletAddress and connectWallet to children
  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook for accessing the wallet context
export const useWallet = () => useContext(WalletContext);
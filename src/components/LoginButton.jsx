'use client'
import { useWallet } from "@/context/WalletContext";

const ConnectWalletButton = () => {
  const { walletAddress, connectWallet, isConnected } = useWallet();

  return (
    <button
      onClick={connectWallet}
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-500"
    >
      {isConnected ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
    </button>
  );
};

export default ConnectWalletButton;
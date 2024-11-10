'use client'

import { useOCAuth } from '@opencampus/ocid-connect-js';
import { ethers } from 'ethers';

export default function LoginButton() {
  const { ocAuth } = useOCAuth();

  const handleLogin = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log('Wallet connected:', await signer.getAddress());
      } else {
        console.error('No Ethereum provider found');
      }

      await ocAuth.signInWithRedirect({ state: 'opencampus' });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return <button onClick={handleLogin}>Login</button>;
}
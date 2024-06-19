import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Web3 from 'web3';
import { database, ref, get, set } from './firebase';

function Start() {
  

    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 


    const  connectToWallet = async () => {
        try {
            if (window.ethereum) {
                setLoading(true);

                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const web3Instance = new Web3(window.ethereum);
                const accounts = await web3Instance.eth.getAccounts();
                setWeb3(web3Instance);
                setAccount(accounts[0]);

             
            } else {
                console.error('Please install MetaMask or another wallet provider.');
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        } finally {
            setLoading(true);
        }
    };

    useEffect(() => {
        if (account) {
            const checkDatabase = async () => {
                try {
              
                    const walletAddressRef = ref(database, 'User/' + account);
                    const snapshot = await get(walletAddressRef);
                    const isAddressPresent = snapshot.exists();

                    if (isAddressPresent) {
                        alert('You have already registered.');
                        navigate('/home');
                    } else {
                    
                        await set(walletAddressRef, true);
                        alert('Wallet address stored successfully.');
                        navigate('/home');
                    }
                } catch (error) {
                    console.error('Error checking database:', error);
                }
            };

            checkDatabase();

            console.log('Connected to wallet. Address:', account);
        }
    }, [account]);

return (
    <div className='flex justify-center items-center lg:py-72 lg:px-10 gap-6 h-screen z-0 bg-no-repeat' style={{backgroundImage: "url('/chessbg.jpg')"}}>
    
      <div className='w-[90%] lg:w-[30%] h-[20%] lg:h-[85%] px-1 lg:py-10 py-4 shadow-2xl shadow-black flex flex-col gap-6 rounded-b-3xl z-10 bg-transparent'>
        <div className='flex flex-col justify-center gap-3 pt-2'>
          <h1 className="text-white font-bold text-3xl px-36">Welcome Kings !</h1>
         
          <div className="px-40 justify-items-center pt-2">
            <button onClick={connectToWallet} type="submit" className='bg-white transition duration-300 ease-out ease-in text-black font-bold px-9 py-5 rounded-lg hover:bg-black hover:text-white'>Connect to Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
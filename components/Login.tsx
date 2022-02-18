import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import { signInAnonymous, signInWithGoogle } from '../firebase/authentification';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

function Login() {

  const router = useRouter();

  const LoginWithGoogle = () => {
    signInWithGoogle().then(
      () => {
        router.push('/todo')
      }
    ).catch(
      error => {
        toast(error.message, {
          icon: '⛔️'
        });
      }
    )
  }

  const LoginAnonymously = () => {
    signInAnonymous().then(
      () => {
        router.push('/todo')
      }
    ).catch(
      error => {
        toast(error.message, {
          icon: '⛔️'
        })
      }
    )
  }

  return (
    <div className='flex flex-col h-full items-center justify-center'>
      <p className='font-normal text-5xl mb-6'>todos</p>
      <Player 
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_ipcfpsml.json"
        style={{ height: '300px', width: '300px' }}
        ></Player>
      <p className='text-base my-6'>Work Less, Achieve More</p>
      <div className='flex '>
        <button className='flex items-center justify-center border-2 py-2 px-6 rounded-md mr-4'
          onClick={LoginWithGoogle}
        >
          <i className='bi bi-google mr-2'></i>
          <span>Google</span>
        </button>
        <button className='bg-black text-white flex items-center justify-center py-2 px-6 rounded-md'
          onClick={LoginAnonymously}
        >
          <i className='bi bi-person mr-2'></i>
          <span>Anonymous</span>
        </button>
      </div>
      <Toaster 
        position="bottom-center"
        toastOptions={{
          // Define default options
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          }
        }}
      />
    </div>
  );

}

export default Login;

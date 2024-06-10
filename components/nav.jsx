'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import NextAuth from 'next-auth'

const Nav = () => {
  const isUserLoggedIn = false; // Simuliert den Login-Status
  /*
  const [providers,setProvider ] = useState(null);
 
  useEffect(()=>{
  const  setProvider = async ()=> {
  const response = await getProviders();
  setProvider(response)
  }
  setProvider();
 },[]) 
  */ return (
    <nav className="flex-between1 flex-end1 w-full mb-16 pt-3 nav">
      {/* Desktop Nav */}
      <div className='desktop-nav space'>
        <Link href='/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/logo.png'
            alt="Pokeball Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>
        {isUserLoggedIn ? (
          <div className='flex gap-3 gap-5 bnt-div'>
            <Link href='/create-prompt' className='black_btn flex-center'>
              Create Post
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href="/">
              <Image
                src="/assets/user.png"
                width={60}
                height={60}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <div>
            <button type='button' onClick={signIn} className='outline_btn'>
              Sign In
            </button>
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      <div className='mobile-nav'>
        
        {isUserLoggedIn ? (
          <div className='flex gap-3 gap-5'>
            <Link href="/">
              <Image
                src="/assets/user.png"
                width={60}
                height={60}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <div>
            <button type='button' onClick={signIn} className='outline_btn'>
              Sign In
            </button>
          </div>
        )}
        <Link href='/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/logo.png'
            alt="Pokeball Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
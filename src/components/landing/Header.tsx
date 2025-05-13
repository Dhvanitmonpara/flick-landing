'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CTAButton from './CTAButton';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';

const changeTheme = () => {
  const root = document.documentElement;
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const darkModeEnables = localStorage.getItem('theme') === 'dark';
    if (darkModeEnables) changeTheme();
  }, []);

  const themeHandler = () => {
    setIsDarkMode(!isDarkMode);
    changeTheme();
  }

  return (
    <div
      className={`sticky flex justify-between items-center transition-all duration-300 mx-auto z-50 ${scrolled
        ? 'top-0 lg:top-6 lg:rounded-full shadow-md h-14 lg:max-w-4xl px-12 lg:px-2 bg-background'
        : 'top-0 lg:rounded-full shadow-md h-14 max-w-4xl px-12 lg:px-0 sm:bg-transparent sm:shadow-none sm:h-24 sm:max-w-6xl'
        }`}
    >
      <div className='font-avallon text-4xl animate-fade-in-blur lg:w-24 text-center'>
        <Link href="/">F</Link>
      </div>
      <div className={`flex justify-center items-center ${scrolled ? "gap-8" : "gap-12"} animate-fade-in-blur`}>
        <Link className='hover:text-primary hover:font-semibold hidden sm:block' href="/">Features</Link>
        <Link className='hover:text-primary hover:font-semibold hidden sm:block' href="/">How it works</Link>
        <button className='cursor-pointer' onClick={themeHandler}>
          {isDarkMode ? <IoIosMoon /> : <IoMdSunny />}
        </button>
        {scrolled && <CTAButton size='lg' className='animate-slide-in-left hidden sm:flex' />}
      </div>
    </div>
  );
}

export default Header;

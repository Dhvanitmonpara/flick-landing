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
      className={`sticky flex justify-between items-center max-w-5xl transition-all duration-300 mx-auto z-50 ${scrolled
        ? 'top-0 sm:top-8 sm:rounded-full shadow-md h-14 max-w-4xl px-12 sm:pl-12 sm:pr-2 bg-background'
        : 'top-0 sm:rounded-full shadow-md h-14 max-w-4xl bg-background px-12 sm:px-0 sm:bg-transparent sm:shadow-none sm:h-24 sm:max-w-5xl'
        }`}
    >
      <div className='font-avallon text-4xl animate-fade-in-blur'>
        <Link href="/">F</Link>
      </div>
      <div className={`justify-center items-center ${scrolled ? "gap-8" : "gap-12"} animate-fade-in-blur`}>
        <Link className='hover:text-primary hover:font-semibold hidden sm:flex' href="/">Features</Link>
        <Link className='hover:text-primary hover:font-semibold hidden sm:flex' href="/">How it works</Link>
        <button className='cursor-pointer' onClick={themeHandler}>
          {isDarkMode ? <IoIosMoon /> : <IoMdSunny />}
        </button>
        {scrolled && <CTAButton className='animate-slide-in-left hidden sm:flex' />}
      </div>
    </div>
  );
}

export default Header;

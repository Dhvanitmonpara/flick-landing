'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CTAButton from './CTAButton';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky flex justify-between items-center transition-all duration-300 mx-auto z-50 rounded-full ${scrolled
        ? 'top-8 shadow-md h-14 max-w-4xl pl-12 pr-2 bg-background'
        : 'top-8 shadow-md h-14 max-w-4xl bg-background pl-12 pr-2 sm:px-0 sm:bg-transparent sm:shadow-none sm:top-0 sm:h-24 sm:max-w-5xl'
        }`}
    >
      <div className='font-avallon text-3xl animate-fade-in-blur'>
        <Link href="/">Flick</Link>
      </div>
      <div className={`justify-center items-center hidden sm:flex ${scrolled ? "gap-8" : "gap-12"} animate-fade-in-blur`}>
        <Link className='hover:text-primary hover:font-semibold' href="/">Features</Link>
        <Link className='hover:text-primary hover:font-semibold' href="/">How it works</Link>
        {scrolled && <CTAButton className='animate-slide-in-left' />}
      </div>
    </div>
  );
}

export default Header;

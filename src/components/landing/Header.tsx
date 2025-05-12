'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
      className={`sticky flex justify-between items-center transition-all duration-300 mx-auto z-50 bg-background rounded-full ${scrolled
          ? 'top-8 shadow-md h-14 max-w-4xl px-12'
          : 'top-0 h-24 max-w-5xl'
        }`}
    >
      <div className='font-avallon text-3xl'>
        <Link href="/">Flick</Link>
      </div>
      <div className='flex justify-center items-center gap-12'>
        <Link className='hover:text-primary hover:font-semibold' href="/">Features</Link>
        <Link className='hover:text-primary hover:font-semibold' href="/">How it works</Link>
      </div>
    </div>
  );
}

export default Header;

// src/app/fonts.ts
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const avallon = localFont({
  src: '../assets/fonts/avallon-regular/Avallon.woff2',
  display: 'swap',
  variable: "--font-avallon"
});

export const editorial = localFont({
  src: '../assets/fonts/editorial-old-font/ppeditorialold-regular.otf',
  display: 'swap',
  variable: "--font-editorial"
});

export const garnett = localFont({
  src: '../assets/fonts/garnett/Garnett-Regular.ttf',
  display: 'swap',
  variable: "--font-garnett"
});

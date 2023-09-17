'use client';

import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Template = ({ children }: { children: ReactNode }) => (
  <div className="dark:bg-nft-dark bg-white min-h-screen">
    <Navbar />
    <div className="pt-65">{children}</div>
    <Footer />
  </div>
);
export default Template;

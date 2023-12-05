import { Children } from '@/interface/types';
import React from 'react';
import { Sidebar } from '../navigation/sidebar';
import { Navbar } from '../navigation/navbar';

export const MainLayout = ({ children }: Children) => {
  return (
    <main className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-col h-full w-[calc(100%-15rem)]'>
        <Navbar />
        <div className='h-full py-6'>{children}</div>
      </div>
    </main>
  );
};

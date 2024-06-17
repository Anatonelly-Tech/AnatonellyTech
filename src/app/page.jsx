'use client';
import React from 'react';

import Content from '@/components/content';
import Footer from '@/components/footer';
import Projects from '@/components/projects';

const page = () => {
  return (
    <div className='flex flex-col w-full bg-white overflow-x-hidden '>
      <Content />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;

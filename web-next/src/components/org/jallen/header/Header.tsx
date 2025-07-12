'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navigation from '../navigation/Navigation';
import MobileNavigation from '../navigation/MobileNavigation';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { getPortfolioView } from '@/app/data/api/common';

const Header = () => {
  function handleChange() {
    const el: HTMLInputElement = document.getElementById('viewer') as HTMLInputElement;
    const val = el.value.toString();
    if (val !== 'next') {
      const url = getPortfolioView(el.value) || 'https://jallen-next.vercel.app/';
      window.location.href = url;
    }
  }

  return (
    <header className='py-8 xl:py-8 text-white bg-sidebar'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              James Allen
            </h1>
          </Link>
          <div>
            <select id='viewer' className='bg-sidebar font-karla text-sm' onChange={handleChange}>
              <option value='next'>Next.js</option>
              <option value='react'>React</option>
              <option value='vue'>Vue.js</option>
            </select>
          </div>
        </div>

        <div className='hidden lg:flex items-center gap-8'>
          <Navigation />
          <Link href='https://www.linkedin.com/in/tjamesallen15/'>
            <Button className='gap-2 hover:bg-accent transition-all bg-white text-foreground hover:text-primary'>
              <span className='text-[14px] font-medium'>Hire me</span>
              <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>

        <div className='lg:hidden flex flex-row items-center gap-4'>
          <MobileNavigation />
          <Link href='https://www.linkedin.com/in/tjamesallen15/'>
            <Button className='gap-2 hover:bg-accent transition-all bg-white text-foreground hover:text-primary'>
              <span className='text-[14px] font-medium'>Hire me</span>
              <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
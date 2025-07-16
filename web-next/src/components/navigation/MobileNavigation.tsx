'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Socials from '../socials/Socials';
import { getNavigationItems } from '@/app/data/api/common';

const MobileNavigation = () => {
  const pathName = usePathname();
  const links = getNavigationItems();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center gap-2 group'>
        <IoMdMenu className='text-[20px] text-white group-hover:text-link-accent' />
        <span className='text-white group-hover:text-link-accent hidden sm:block'>Menu</span>
      </SheetTrigger>

      <SheetContent className='flex flex-col bg-sidebar'>
        <SheetTitle className='hidden'></SheetTitle>
        <div className='mt-32 mb-40 text-center text-2xl text-primary'>James Allen</div>

        <nav className='flex flex-col justify-center items-center gap-8'>
          { 
            links.map((link, index) => {
              return (
                <Link href={link.path} key={index} className={`${link.path === pathName && "!text-link-accent border-b-2 border-link-accent"} font-karla text-primary capitalize font-medium hover:text-link-accent transition-all`}>
                  {link.name}
                </Link>
              )
            })
          }
        </nav>

        <div className='flex flex-col xl:flex-row items-center gap-8 mt-2'>
          <Button
            variant='outline'
            size='lg'
            className='hidden uppercase items-center gap-2 text-black'
          >
            <span>Download CV</span>
            <FiDownload className='text-xl text-black' />
          </Button>
          <div className='mb-8 xl:mb-0'>
            <Socials 
              containerStyles='flex gap-6' 
              iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent text-primary hover:transition-all duration-500'
              />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation;
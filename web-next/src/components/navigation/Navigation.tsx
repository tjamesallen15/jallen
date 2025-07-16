'use client';

import { getNavigationItems } from '@/app/data/api/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathName = usePathname();
  const links = getNavigationItems();
  return (
    <nav className='flex gap-8'>
      { 
        links.map((link, index) => {
          return (
            <Link href={link.path} key={index} className={`${link.path === pathName && "text-link-accent border-b-2 border-link-accent"} capitalize font-karla text-lg hover:text-link-accent transition-all`}>
              {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Navigation;
'use client';

import { Social } from '../../../../app/data/common/types';
import { motion } from 'framer-motion';
import { getFooterSocials } from '@/app/data/api/common';

const Footer = () => {
  const socialList: Social[] = getFooterSocials();
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: 'easeInOut'
        }
      }}
      className='fixed w-full flex-row justify-between bg-sidebar bottom-0 p-4 hidden md:flex'>
      <span className='text-xs text-link'>Created using Next.js &#169; Copyright 2020 of James Allen All Rights Reserved.</span>
      <div className='flex flex-row gap-6 items-center'>
        {
          socialList.map((social, index) => {
            return (
              <div key={index} className='flex flex-row gap-2'>
                <span className='text-link'>{social.icon}</span>
                <a href={social.href} className='text-xs text-link hover:underline'>{social.name}</a>
              </div>
            )
          })
        }
      </div>
    </motion.footer>
  )
}

export default Footer;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { 
            delay: 0.5,
            duration: 0.4,
            ease: 'easeIn'
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              delay: 2.4,
              duration: 0.4,
              ease: 'easeInOut'
            }
          }}
        >
          <div className='w-[298px] h-[298px] xl:w-[398px] xl:h-[398px]'>
            <Image src='/assets/profile.png' priority quality='100' fill alt='J' className='object-contain rounded-full' />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Profile;
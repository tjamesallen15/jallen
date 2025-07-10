import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <div key={window.location.pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut'
            }
          }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
        >

        </motion.div>
      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition;
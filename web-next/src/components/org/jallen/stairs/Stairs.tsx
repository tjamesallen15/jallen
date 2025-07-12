import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: '0%'
  },
  animate: {
    top: '100%'
  },
  exit: {
    top: ['100%', '0%']
  }
}

const reverseIndex = (index: number) => {
  const totalSteps = 1;
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {[...Array(1)].map((_, index) => (
        <motion.div 
          key={index}
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: 0.1 * reverseIndex(index)
          }}
          className='h-full w-full bg-white relative'
        />
      ))}
    </>
  )
}

export default Stairs;
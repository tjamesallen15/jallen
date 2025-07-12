import Profile from '@/components/org/jallen/profile/Profile';
import Socials from '@/components/org/jallen/socials/Socials';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { getSkills } from './data/api/skills';
import { IndexData, Skills } from './data/common/types';
import { getIndexData } from './data/api/common';

const Home = async () => {
  const skills: Skills[] = await getSkills();
  const data: IndexData = getIndexData();
  return (
    <section className='h-[100vh] xl:h-[85vh]'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col pt-8 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>{data.title}</span>
            <h1 className='h1 mb-6'>
              <span className='text-accent'>{data.first}</span><br />
              <span>{data.last}</span>
            </h1>

            <p className='font-karla max-w-[500px] mb-9'>{data.message}</p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
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
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Profile />
          </div>

        </div>
        <div className='hidden xl:flex flex-row gap-2 max-w-[1250px] flex-wrap'>
          {
            skills.map((item, index: number) => {
              return (
                <Badge key={index} className='bg-white text-black'>{item.name}</Badge>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Home;
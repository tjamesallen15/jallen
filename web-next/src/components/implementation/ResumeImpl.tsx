'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { About, Experience, Heading, Information, Skills } from '@/app/data/common/types';
import { getProfileHeading, getExperienceHeading, getSkillsHeading } from '@/app/data/api/common';

const ResumeImpl = ({ abouts, experiences, skills, informations } : { abouts: About[], experiences: Experience[], skills: Skills[], informations: Information[] }) => {
  const profileHeading: Heading = getProfileHeading();
  const experienceHeading: Heading = getExperienceHeading();
  const skillsHeading: Heading = getSkillsHeading();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { 
          delay: 1.0,
          duration: 0.4,
          ease: 'easeIn'
        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 gap-6'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='profile' className='flex flex-col gap-[20px] xl:flex-row xl:gap-[60px]'>
          <TabsList className='flex flex-row w-full max-w-[380px] mx-auto xl:flex-col xl:mx-0 bg-transparent'>
            <TabsTrigger value={profileHeading.value}>{profileHeading.title}</TabsTrigger>
            <TabsTrigger value={experienceHeading.value}>{experienceHeading.title}</TabsTrigger>
            <TabsTrigger value={skillsHeading.value}>{skillsHeading.title}</TabsTrigger>

            <div className='hidden text-white m-6 ps-[20px] xl:block'>
              {
                informations.map((item, index) => {
                  return (
                    <div 
                      key={index}
                      className='flex flex-row w-full justify-between'
                    >
                      <div className='text-accent font-semibold'>{item.name}:</div>
                      <div className='font-karla text-foreground'>{item.value}</div>
                    </div>
                  )
                })
              }
            </div>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value={profileHeading.value} className='w-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{profileHeading.title}</h3>
                  <p className='max-w-[600px] mx-auto xl:mx-0'>{profileHeading.description}</p>
                </div>

                <ScrollArea className='h-[400px]'>
                  <div className='flex flex-col gap-2 bg-sidebar rounded-md'>
                    {
                      abouts.map((item: About, index: number) => {
                        return (
                          <p className='font-karla pt-4 ps-6 pe-6 text-primary' key={index}>{item.description}</p>
                        )
                      })
                    }
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value={experienceHeading.value} className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experienceHeading.title}</h3>
                  <p className='max-w-[600px] mx-auto xl:mx-0'>{experienceHeading.description}</p>
                </div>
                <ScrollArea className='h-[400px]'>
                  <ul className='flex flex-col gap-4'>
                    {
                      experiences.map((item: Experience, index: number) => {
                        return (
                          <li 
                            key={index}
                            className='bg-sidebar h-auto py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-start gap-1'
                          > 
                            <h3 className='text-primary text-xl font-semibold max-w-[400px] min-h-[20px] text-center lg:text-left'>{item.company}</h3>
                            <h4 className='text-primary'>{item.position}</h4>
                            <span className='text-link-accent text-sm'>{item.duration}</span>
                            <span className='text-link text-sm'>{item.total}</span>
                            <span className='text-link text-sm'>{item.location}</span>
                            <div className='mt-2'>
                              <p className='font-karla text-primary'>{item.description}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value={skillsHeading.value} className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skillsHeading.title}</h3>
                  <p className='max-w-[600px] mx-auto xl:mx-0'>{skillsHeading.description}</p>
                </div>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 xl:gap-[30px]'>
                    {
                      skills.map((item: Skills, index: number) => {
                        if (item.icon !== undefined) {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[110px] bg-sidebar text-primary rounded-md flex justify-center items-center hover:bg-gray-500'>
                                    <div className='text-6xl transition-all duration:300'>{item.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className='text-accent font-semibold'>{item.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
                </ScrollArea>
                
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default ResumeImpl;
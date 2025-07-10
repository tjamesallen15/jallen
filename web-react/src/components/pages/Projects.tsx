import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import type { Application, ProcessWork } from "../../../../shared/common/model";
import { getApplications } from "../../../../shared/api/application";
import { getProcessWorks } from "../../../../shared/api/work";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Projects = () => {
  const [applications, setApplication] = useState<Application[]>([]);
  const [works, setWork] = useState<ProcessWork[]>([]);
  const [applicationLoading, setApplicationLoading] = useState(true);
  const [workLoading, setWorkLoading] = useState(true);

  useEffect(() => {
    getApplicationData();
    getWorkData();
  }, []);

  const getApplicationData = async () => {
    if (!applicationLoading) return;
    const applicationData = await getApplications();
    setApplication(applicationData);
    setApplicationLoading(false);
  };

  const getWorkData = async () => {
    if (!workLoading) return;
    const workData = await getProcessWorks();
    setWork(workData);
    setWorkLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.0,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="personal" className="flex flex-col">
          <TabsList className="mt-0 xl:mt-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="personal">
              {applicationLoading && (
                <Skeleton containerClassName="w-full" count={18} />
              )}
              <ScrollArea className="h-[525px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 1.0,
                      duration: 0.4,
                      ease: "easeIn",
                    },
                  }}
                  className="grid grid-cols gap-[60px]"
                >
                  {applications.map((item, index) => {
                    return (
                      <div
                        className="flex-1 flex flex-col justify-center gap-2"
                        key={index}
                      >
                        <div className="w-full flex justify-between items-center">
                          <div className="text-3xl font-extrabold">
                            {item.title}
                          </div>
                          <div className="flex flex-row gap-2 pe-4">
                            {item.site !== null ? (
                              <a
                                href={item.site}
                                className="w-[32px] h-[32px] rounded-full bg-white transition-all duration-500 flex justify-center items-center hover:text-primary hover:bg-accent hover:-rotate-360"
                              >
                                <FaGlobe className="text-xl w-[28px] h-[28px]" />
                              </a>
                            ) : null}
                            {item.repository !== "N/A" ? (
                              <a
                                href={item.repository}
                                className="w-[32px] h-[32px] rounded-full bg-white transition-all duration-500 flex justify-center items-center hover:text-primary hover:bg-accent hover:-rotate-360"
                              >
                                <FaGithub className="text-xl w-[28px] h-[28px]" />
                              </a>
                            ) : null}
                          </div>
                        </div>
                        <h2 className="text-[18px] font-bold leading-none text-accent transition-all duration-500">
                          {item.tech}
                        </h2>
                        <h2 className="text-[14px] text-foreground font-semibold leading-none">
                          {item.category}
                        </h2>
                        <p className="text-foreground mt-4 font-karla pe-4">
                          {item.description}
                        </p>
                        <div className="border-b border-sidebar w-[calc(100%-16px)]" />
                      </div>
                    );
                  })}
                </motion.div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="work">
              {workLoading && (
                <Skeleton containerClassName="w-full" count={18} />
              )}
              <ScrollArea className="h-[525px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 1.0,
                      duration: 0.4,
                      ease: "easeIn",
                    },
                  }}
                  className="grid grid-cols gap-[30px]"
                >
                  {works.map((item, index) => {
                    return (
                      <div
                        className="flex-1 flex flex-col justify-center text-center align-center gap-2 md:text-left"
                        key={index}
                      >
                        <div className="text-3xl font-extrabold">
                          {item.name}
                        </div>
                        <div className="text-[18px] font-bold leading-none text-accent transition-all duration-500">
                          {item.sub}
                        </div>
                        <div className="text-[14px] text-link-accent font-semibold leading-none">
                          {item.technology}
                        </div>
                        <div className="text-[16px] font-semibold leading-none mb-2">
                          {item.company}
                        </div>
                        {item.descriptions.map((description, index) => {
                          return (
                            <div
                              className="text-foreground font-karla gap-2"
                              key={index}
                            >
                              {description}
                            </div>
                          );
                        })}
                        <div className="border-b border-sidebar w-full" />
                      </div>
                    );
                  })}
                </motion.div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Projects;

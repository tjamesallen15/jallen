import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import { Badge } from "./ui/badge";
import Profile from "./profile/Profile";
import Socials from "./socials/Socials";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDashboard } from "@/hooks/useDashboard";
import { useMemo } from "react";

const Dashboard = () => {
  const { skills, isLoading, dashboard } = useDashboard();

  const skillBadges = useMemo(() => {
    if (!skills) return null;
    return skills.map((item, index) => (
      <Badge key={`${item.name}-${index}`} className="bg-white text-black">
        {item.name}
      </Badge>
    ));
  }, [skills]);

  return (
    <main className="h-[100vh] xl:h-[85vh]" role="main">
      <div className="container mx-auto h-full">
        <div className="flex flex-col pt-8 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <header className="text-center xl:text-left order-2 xl:order-none">
            <p className="text-xl" role="doc-subtitle">
              {dashboard.title}
            </p>
            <h1 className="h1 mb-6">
              <span className="text-accent">{dashboard.first}</span>
              <br />
              <span className="text-foreground">{dashboard.last}</span>
            </h1>

            <p className="font-karla max-w-[500px] mb-9">{dashboard.message}</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="sr-only uppercase items-center gap-2 text-black"
                aria-label="Download CV document"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl text-black" aria-hidden="true" />
              </Button>
              <nav className="mb-8 xl:mb-0" aria-label="Social media links">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </nav>
            </div>
          </header>

          <aside className="order-1 xl:order-none mb-8 xl:mb-0">
            <Profile />
          </aside>
        </div>
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
          className="hidden xl:flex flex-row gap-2 w-full max-w-[1250px] flex-wrap"
          aria-label="Technical skills"
        >
          {isLoading ? (
            <Skeleton containerClassName="w-full inline-block" count={3} />
          ) : (
            skillBadges
          )}
        </motion.section>
      </div>
    </main>
  );
};

export default Dashboard;

import { TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { createFadeUpVariants } from "@/modules/home/utils";



const tabVariants = createFadeUpVariants(17)


function AnimatedTab({
  value,
  className,
  children,
  projectId
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
  projectId: string;
}) {
  return (
    <TabsContent key={`${projectId}-${value}`} value={value} className={cn("bg-card p-4 rounded-md", className)}>
      <motion.div className='space-y-6' variants={tabVariants} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </TabsContent>
  );
}

export default AnimatedTab 
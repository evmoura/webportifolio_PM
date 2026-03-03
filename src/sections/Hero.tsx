import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, FileDown, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

export function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-dark-primary relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-primary to-dark-secondary opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4"
            >
              PMP-Certified Project Manager
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4"
            >
              EVERSON MOURA
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-text-secondary mb-6"
            >
              Digital Transformation & Platform Migration Specialist
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-base leading-relaxed mb-8 max-w-xl"
            >
              10+ years leading enterprise technology initiatives and complex migrations 
              across global organizations. Translating ambiguity into clear roadmaps 
              and predictable outcomes.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                onClick={() => handleScrollTo('#experience')}
                className="bg-white text-dark-primary hover:opacity-85 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Experience
              </Button>
              <Button
                variant="outline"
                className="border-dark-tertiary text-white hover:bg-dark-tertiary hover:-translate-y-0.5 transition-all duration-300"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 text-sm text-text-secondary"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Orlando, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>U.S. Permanent Resident</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] as const, delay: 0.3 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer ring decoration */}
              <div className="absolute inset-0 rounded-full border-2 border-dark-tertiary scale-110" />
              
              {/* Inner ring decoration */}
              <div className="absolute inset-0 rounded-full border border-text-secondary/30 scale-105" />
              
              {/* Circular portrait */}
              <img
                src="/images/portrait.png"
                alt="Everson Moura - PMP Certified Project Manager"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => handleScrollTo('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-text-secondary hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}

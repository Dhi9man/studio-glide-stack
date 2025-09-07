import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 39, 46, 0.8), rgba(34, 39, 46, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Shubham Dhiman
        </motion.h1>
        
        <motion.div 
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono"
          variants={itemVariants}
        >
          {/* <span className="text-accent">_</span>{' '} */}
          <span className="text-primary">role</span>{' '}
          <span className="text-foreground">=</span>{' '}
          <span className="text-yellow-400">["Data Engineer","Data Analyst","Business Analyst"]</span>
          {/* <span className="text-foreground">;</span> */}
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I design efficient data pipelines, analyze complex datasets, and deliver actionable insights that drive business decisions. Passionate about SQL, Python, and building scalable data solutions for real-world impact. Little bit of WEB DEV :D
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <Button size="lg" className="group bg-gradient-primary hover:scale-105 transition-transform">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
          
          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="hover:bg-secondary/50">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-secondary/50">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-secondary/50">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="animate-bounce"
          variants={itemVariants}
        >
          <ArrowDown className="h-6 w-6 mx-auto text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
      description: 'Let\'s connect professionally'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com',
      description: 'Follow my tech journey'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:alex@example.com',
      description: 'Send me a message'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono mb-8">
            // Ready to collaborate on your next project?
          </p>
          
          <div className="code-block text-left max-w-lg mx-auto mb-8">
            <p className="font-mono text-sm">
              <span className="text-accent">const</span>{' '}
              <span className="text-primary">collaboration</span>{' '}
              <span className="text-foreground">=</span>{' '}
              <span className="text-yellow-400">"Let's build something amazing together!"</span>
              <span className="text-foreground">;</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground group-hover:rotate-6 transition-transform">
                      {link.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-primary/10 border-primary/20 mb-8">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Got a project in mind?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm always excited to work on new challenges and collaborate with talented people.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </CardContent>
          </Card>

          <p className="text-muted-foreground text-sm font-mono">
            // Built with ❤️ using React, TypeScript, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, Cpu, Palette, Code2 } from 'lucide-react';

const Lab = () => {
  const experiments = [
    {
      id: 1,
      title: "3D Portfolio Site",
      description: "Interactive Three.js portfolio with 3D models and animations",
      icon: <Cpu className="w-6 h-6" />,
      tech: ["Three.js", "React", "GLSL"],
      status: "In Progress",
      link: "https://github.com"
    },
    {
      id: 2,
      title: "ETL Pipeline Mini-Project",
      description: "Small-scale Extract-Transform-Load (ETL) pipeline for moving raw CSV data into a structured PostgreSQL database.",
      icon: <Code2 className="w-6 h-6" />,
      tech: ["Python","PostgreSQL","Airflow"],
      status: "Beta",
      link: "https://github.com"
    },
    {
      id: 3,
      title: "Power BI Interactive Dashboard",
      description: "An interactive dashboard built with Power BI, integrating multiple data sources to visualize KPIs and trends in real time.",
      icon: <Palette className="w-6 h-6" />,
      tech: ["Power BI", "DAX", "Data Visualization"," SQL"],
      status: "Complete",
      link: "https://github.com"
    },
    // {
    //   id: 4,
    //   title: "Real-time Collaboration",
    //   description: "WebRTC-based collaborative coding platform",
    //   icon: <Zap className="w-6 h-6" />,
    //   tech: ["WebRTC", "Socket.io", "React"],
    //   status: "Beta",
    //   link: "https://github.com"
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'text-primary';
      case 'Beta': return 'text-accent';
      case 'In Progress': return 'text-yellow-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="lab" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            The Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // Experimental projects and creative explorations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                        {experiment.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {experiment.title}
                        </h3>
                        <span className={`text-sm font-mono ${getStatusColor(experiment.status)}`}>
                          {experiment.status}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {experiment.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experiment.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
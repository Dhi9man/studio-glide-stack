import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const codeString = `// About.tsx
interface Developer {
  name: string;
  role: string;
  experience: number;
  location: string;
  languages: string[];
  frameworks: string[];
  tools: string[];
  currentFocus: string[];
  funFact: string;
}

const alexDeveloper: Developer = {
  name: "Alex Developer",
  role: "Full Stack Developer",
  experience: 5,
  location: "San Francisco, CA",
  
  languages: [
    "TypeScript", "JavaScript", "Python", 
    "Go", "Rust", "SQL"
  ],
  
  frameworks: [
    "React", "Next.js", "Vue.js", "Node.js",
    "Express", "FastAPI", "PostgreSQL"
  ],
  
  tools: [
    "Docker", "AWS", "Git", "Figma",
    "Webpack", "Vite", "Tailwind CSS"
  ],
  
  currentFocus: [
    "WebAssembly", "Three.js", "AI/ML",
    "Serverless Architecture"
  ],
  
  funFact: "I debug with console.log() and I'm not ashamed! 🚀"
};

export default alexDeveloper;`;

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"] },
    { category: "Tools", items: ["Docker", "AWS", "Git", "Figma", "Webpack"] },
    { category: "Currently Learning", items: ["Rust", "WebAssembly", "Machine Learning", "Blockchain"] }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Code Editor Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-secondary border-border/50 overflow-hidden">
              {/* Editor Header */}
              <div className="bg-secondary/50 border-b border-border/50 p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-4">About.tsx</span>
              </div>
              
              {/* Code Content */}
              <CardContent className="p-0">
                <pre className="text-xs leading-relaxed p-4 overflow-x-auto font-mono text-foreground bg-transparent">
                  <code dangerouslySetInnerHTML={{
                    __html: codeString
                      .replace(/\/\/ .*/g, '<span class="text-muted-foreground">$&</span>')
                      .replace(/interface|const|export|default/g, '<span class="text-accent">$&</span>')
                      .replace(/"[^"]*"/g, '<span class="text-green-400">$&</span>')
                      .replace(/Developer|alexDeveloper/g, '<span class="text-primary">$&</span>')
                      .replace(/name|role|experience|location|languages|frameworks|tools|currentFocus|funFact/g, '<span class="text-yellow-400">$&</span>')
                  }} />
                </pre>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg font-mono hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Personal Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gradient-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source projects, or experimenting with creative coding. 
                    I believe in writing clean, maintainable code and creating user experiences 
                    that make a difference.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
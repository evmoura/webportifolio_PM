import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'M.S., Information Technology',
    school: 'Southern States University',
    location: 'San Diego, CA',
    year: '2021',
  },
  {
    degree: 'B.S., Information Systems',
    school: 'College Eniac',
    location: 'Brazil',
    year: '2016',
  },
];

const certifications = [
  {
    name: 'Project Management Professional (PMP)',
    issuer: 'PMI',
    icon: Award,
  },
  {
    name: 'ITIL Foundation',
    issuer: 'AXELOS',
    icon: Award,
  },
  {
    name: 'Agile & Scrum Training',
    issuer: 'Various',
    icon: Award,
  },
];

export function Education() {
  return (
    <section className="bg-dark-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <ScrollReveal>
              <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4">
                Education
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
                Academic Background
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                >
                  <Card className="bg-dark-secondary border-dark-tertiary hover:border-text-secondary/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-dark-tertiary rounded-none flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-text-secondary mb-2">
                            {edu.school}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-text-secondary">
                            <span>{edu.location}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <ScrollReveal>
              <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4">
                Certifications
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
                Professional Credentials
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                >
                  <Card className="bg-dark-secondary border-dark-tertiary hover:border-text-secondary/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-dark-tertiary rounded-none flex items-center justify-center flex-shrink-0">
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {cert.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary/80"
                          >
                            {cert.issuer}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Lenovo',
    title: 'Senior Project Manager, Digital Transformation',
    period: 'Jun 2022 – Jul 2024',
    location: 'Remote',
    achievements: [
      'Led multi-million-dollar modernization programs across Americas and EMEA',
      'Built master delivery plans (WBS, scope, cost, risk, comms)',
      'Delivered SAP integrations improving order accuracy and processing efficiency by 18%',
      'Established PMO standards (RAID logs, executive dashboards, change control)',
      'Presented weekly executive reporting on scope/schedule/cost/risk',
      'Coordinated cross-functional teams and aligned vendors/partners',
    ],
    skills: ['SAP', 'PMO', 'Executive Reporting', 'Cross-functional Leadership'],
  },
  {
    company: 'Texas Capital Bank',
    title: 'Business Systems Analyst, CRM Transformation',
    period: 'Feb 2022 – Jun 2022',
    location: 'Remote',
    achievements: [
      'Supported Salesforce CPQ implementation aligned to enterprise transformation',
      'Managed UAT cycles, requirements validation, and stakeholder sign-off',
      'Coordinated agile ceremonies and maintained delivery timelines',
      'Ensured data accuracy, system validation, and compliance',
      'Collected business requirements for API integration, creating stories in JIRA',
    ],
    skills: ['Salesforce CPQ', 'UAT', 'Agile', 'JIRA'],
  },
  {
    company: 'Cisco Systems',
    title: 'IT Project Analyst, Customer Experience',
    period: 'May 2015 – Dec 2019',
    location: 'Latin America',
    achievements: [
      'Coordinated large-scale enterprise projects across Latin America',
      'Managed schedules, documentation, and executive reporting',
      'Supported delivery standardization through consistent artifacts',
    ],
    skills: ['Enterprise Projects', 'Documentation', 'Reporting'],
  },
  {
    company: 'The Walt Disney Company',
    title: 'Attractions Cast Member',
    period: 'Nov 2025 – Present',
    location: 'Orlando, FL',
    achievements: [
      'Operate in safety-critical, high-volume environments',
      'Coordinate with cross-functional teams for real-time escalations',
    ],
    skills: ['Safety Management', 'Team Coordination'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-dark-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4">
            Professional Experience
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12">
            A Track Record of Enterprise Delivery Excellence
          </h2>
        </ScrollReveal>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-dark-tertiary hidden sm:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
              >
                <Card className="bg-dark-secondary border-dark-tertiary hover:border-text-secondary/50 transition-colors duration-300 ml-0 sm:ml-16">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-5 h-5 text-text-secondary" />
                          <h3 className="text-xl font-semibold text-white">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-text-secondary text-lg">
                          {exp.title}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-text-secondary">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-text-secondary text-sm leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-text-secondary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-dark-tertiary text-text-secondary hover:bg-dark-tertiary/80"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-dark-tertiary border-2 border-text-secondary rounded-full hidden sm:block -translate-x-1.5 mt-[-180px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

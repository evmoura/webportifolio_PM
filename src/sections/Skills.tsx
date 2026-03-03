import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  Users,
  Cpu,
  Wrench,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Project Management',
    icon: Briefcase,
    skills: [
      'Platform Migration & Enterprise Delivery',
      'Scope/Schedule/Cost Management',
      'Risk, Issue, Dependency & Release Management',
      'Change Control & Governance',
      'RAID Logs & Executive Dashboards',
    ],
  },
  {
    title: 'Stakeholder & Vendor Management',
    icon: Users,
    skills: [
      'Cross-functional Team Leadership',
      'Vendor & Partner Coordination',
      'Executive Reporting & Presentations',
      'B2C/B2B Workflow Enablement',
      'Requirements & Sign-off Management',
    ],
  },
  {
    title: 'Technical Expertise',
    icon: Cpu,
    skills: [
      'CRM Transformation (Salesforce CPQ)',
      'ERP Modernization & SAP Integration',
      'Systems Integration & UAT',
      'Data & Reporting Improvements',
      'API Integration Planning',
    ],
  },
  {
    title: 'Tools & Methodologies',
    icon: Wrench,
    skills: [
      'Jira, MS Project, Smartsheet',
      'Power BI, SharePoint',
      'Agile & Scrum Frameworks',
      'ITIL Foundation',
      'Waterfall & Hybrid Methodologies',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-dark-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4">
            Core Competencies
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Skills & Expertise
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-base max-w-2xl mb-12">
            A comprehensive skill set built over a decade of leading complex enterprise 
            technology initiatives across global organizations.
          </p>
        </ScrollReveal>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.165, 0.84, 0.44, 1],
              }}
            >
              <Card className="bg-dark-primary border-dark-tertiary h-full hover:border-text-secondary/50 hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-dark-tertiary rounded-none flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-text-secondary text-sm flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-text-secondary rounded-full mt-2 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

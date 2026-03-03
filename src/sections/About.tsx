import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Separator } from '@/components/ui/separator';

const stats = [
  { value: '10', suffix: '+', label: 'Years Experience' },
  { value: '50', suffix: '+', label: 'Projects Delivered' },
  { value: '4', suffix: '', label: 'Enterprise Companies' },
  { value: 'PMP', suffix: '', label: 'Certified' },
];

export function About() {
  return (
    <section id="about" className="bg-dark-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4">
                About Me
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
                Driving Enterprise Transformation Through Strategic Project Leadership
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                PMP-certified Program/Project Manager with extensive experience leading 
                multi-million-dollar modernization programs across Americas and EMEA. 
                Proven expertise in cross-functional delivery, governance execution, 
                stakeholder management, and vendor coordination.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-text-secondary text-base leading-relaxed">
                Experience spanning ERP modernization, CRM transformation (Salesforce CPQ), 
                systems integration, UAT, and data/reporting improvements. I specialize 
                in translating complex business requirements into actionable project plans 
                that deliver measurable results.
              </p>
            </ScrollReveal>
          </div>
          
          {/* Stats */}
          <div className="lg:pt-12">
            <ScrollReveal delay={0.2}>
              <Separator className="bg-dark-tertiary mb-12" />
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
            
            <ScrollReveal delay={0.6}>
              <Separator className="bg-dark-tertiary mt-12" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

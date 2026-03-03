import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle,
  FileDown,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'emoura.everson@gmail.com',
    href: 'mailto:emoura.everson@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(984) 304-2079',
    href: 'tel:+19843042079',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Orlando, FL',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/everson-moura',
    href: 'https://linkedin.com/in/everson-moura',
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-dark-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-text-secondary text-sm uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Let's Discuss Your Next Project
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-base mb-8">
              Available for senior project management roles in digital transformation 
              and enterprise delivery. Let's connect and explore how I can help drive 
              your organization's success.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-2 text-sm text-text-secondary mb-8">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>U.S. Permanent Resident - No Sponsorship Required</span>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.165, 0.84, 0.44, 1],
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="bg-dark-primary border-dark-tertiary hover:border-text-secondary/50 hover:scale-[1.02] transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-dark-tertiary rounded-none flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-text-secondary text-sm mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="bg-dark-primary border-dark-tertiary h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-dark-tertiary rounded-none flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-text-secondary text-sm mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-dark-primary hover:opacity-85 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

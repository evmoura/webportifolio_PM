import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-dark-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="bg-dark-tertiary mb-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold mb-1">
              EVERSON MOURA
            </p>
            <p className="text-text-secondary text-sm">
              PMP-Certified Project Manager
            </p>
          </div>
          
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Everson Moura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

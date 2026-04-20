
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product Strategy Lab', path: '/portfolio' },
    { name: 'Built & Shipped', path: '/apps' },
    { name: 'Journey', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/swathichaturvedi/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/iamswatie',
      label: 'X (Twitter)'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/iamswatie',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="border-t bg-muted/50 text-muted-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold text-foreground">Swathi Chaturvedi</span>
            <p className="mt-2 text-sm">
              Structured thinking. Real-world impact.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-foreground mb-3 block">Quick links</span>
            <nav className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold text-foreground mb-3 block">Connect</span>
            <div className="flex gap-2">
              {socialLinks.map(social => (
                <Button 
                  key={social.label} 
                  variant="ghost" 
                  size="icon" 
                  asChild 
                  className="transition-all duration-200 hover:text-primary active:scale-[0.98]"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Swathi Chaturvedi. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

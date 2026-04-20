
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product Strategy Lab', path: '/portfolio' },
    { name: 'Built & Shipped', path: '/apps' },
    { name: 'Journey', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  // Also highlight 'Product Strategy Lab' if we are on a case study page
  const isActive = (path) => {
    if (path === '/portfolio' && location.pathname.startsWith('/case-study')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Swathi Chaturvedi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary font-medium bg-primary/10'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-lg transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-primary font-medium bg-primary/10'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

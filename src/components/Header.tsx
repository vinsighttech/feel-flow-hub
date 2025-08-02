import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Instagram, Twitter } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">HealthSense</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('ozellikler')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Özellikler
            </button>
            <button 
              onClick={() => scrollToSection('nasil-calisir')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nasıl Çalışır
            </button>
            <button 
              onClick={() => scrollToSection('talep-formu')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              İletişim
            </button>
          </nav>

          {/* Social Media Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <Button 
              size="sm"
              onClick={() => scrollToSection('talep-formu')}
              className="bg-primary hover:bg-primary-hover text-white font-medium"
            >
              Erken Erişim
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('ozellikler')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Özellikler
              </button>
              <button 
                onClick={() => scrollToSection('nasil-calisir')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Nasıl Çalışır
              </button>
              <button 
                onClick={() => scrollToSection('talep-formu')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                İletişim
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
                <Button 
                  size="sm"
                  onClick={() => scrollToSection('talep-formu')}
                  className="bg-primary hover:bg-primary-hover text-white font-medium"
                >
                  Erken Erişim
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
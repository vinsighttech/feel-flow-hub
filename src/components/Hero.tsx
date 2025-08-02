import { Button } from "@/components/ui/button";
import deviceHero from "@/assets/device-hero.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('talep-formu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tükürüğünüzden
              <span className="block bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Sağlığınızı Keşfedin
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Parmak boyutundaki akıllı cihazımızla stres seviyenizi, uyku kalitinizi ve mutluluk durumunuzu anlık olarak ölçün. Gelecek sağlık teknolojisi şimdi elinizde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow font-semibold px-8 py-4 text-lg"
                onClick={scrollToForm}
              >
                Erken Erişim Talep Et
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
              >
                Nasıl Çalışır?
              </Button>
            </div>
          </div>

          {/* Right Content - Device Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 scale-150" />
              <img 
                src={deviceHero} 
                alt="Akıllı Sağlık Cihazı" 
                className="relative z-10 max-w-md w-full h-auto rounded-3xl shadow-glow transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
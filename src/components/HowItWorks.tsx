import { Droplet, Zap, BarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Droplet className="w-12 h-12 text-secondary" />,
      title: "Basit Numune",
      description: "Sadece küçük bir tükürük damlası gerekir",
      step: "01"
    },
    {
      icon: <Zap className="w-12 h-12 text-secondary" />,
      title: "Anında Analiz",
      description: "30 saniye içinde sonuçlar hazır",
      step: "02"
    },
    {
      icon: <BarChart className="w-12 h-12 text-secondary" />,
      title: "Akıllı Raporlama",
      description: "Mobil uygulamada detaylı analiz ve öneriler",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3 basit adımda sağlığınızı keşfedin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-primary" />
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-soft border-2 border-secondary/20 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
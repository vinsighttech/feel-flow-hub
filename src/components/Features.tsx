import { Activity, Moon, Heart, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Stres Analizi",
      description: "Tükürükteki kortizol seviyelerini analiz ederek anlık stres durumunuzu tespit eder."
    },
    {
      icon: <Moon className="w-8 h-8 text-primary" />,
      title: "Uyku Kalitesi",
      description: "Melatonin ve diğer hormon seviyelerinden uyku kalitenizi değerlendirir."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Mutluluk Ölçümü",
      description: "Serotonin ve dopamin belirteçleriyle ruh halinizi objektif olarak ölçer."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobil Entegrasyon",
      description: "Tüm verilerinizi mobil uygulamada takip edin ve kişiselleştirilmiş öneriler alın."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Gelecek Teknolojisi, Bugünde
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sadece bir damla tükürükle yaşam kalitenizi anlayın ve iyileştirin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">HealthSense</h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Tükürük analiziyle geleceğin sağlık teknolojisini deneyimleyin
          </p>
          <div className="text-sm text-white/60">
            <p>&copy; 2024 HealthSense. Tüm hakları saklıdır.</p>
            <p className="mt-2">İletişim: info@healthsense.tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
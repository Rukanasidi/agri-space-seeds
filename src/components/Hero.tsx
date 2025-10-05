import { Button } from "@/components/ui/button";
import { Sprout, Globe2, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToRegionSelector = () => {
    document.getElementById('region-selector')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDE0MiA3MSUgNDUlIC8gMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Globe2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by NASA Earth Data</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            AgriSphere
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform NASA's biosphere and climate data into actionable insights for climate-resilient agriculture
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center pt-4">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border shadow-sm">
              <Sprout className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Crop Analysis</p>
                <p className="font-semibold">Climate-Resilient</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border shadow-sm">
              <Globe2 className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Global Coverage</p>
                <p className="font-semibold">Satellite Data</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border shadow-sm">
              <TrendingUp className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Food Security</p>
                <p className="font-semibold">Sustainable Growth</p>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button 
              size="lg" 
              onClick={scrollToRegionSelector}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Your Region
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

import ScrollingTicker from "@/components/scrolling-ticker";
import HeroSection from "@/components/hero-section";
import ContractAddress from "@/components/contract-address";
import TimelineSection from "@/components/timeline-section";
import MemeGallery from "@/components/meme-gallery";
import DefiManifesto from "@/components/defi-manifesto";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollingTicker />
      
      {/* Modern Header */}
      <header className="sticky top-0 z-50 glass-morphism border-b border-border/50">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center modern-glow" data-testid="logo-icon">
              <span className="text-white font-bold text-lg lg:text-xl">T</span>
            </div>
            <div>
              <h1 className="font-bold text-lg lg:text-xl gradient-text" data-testid="site-title">Live 24H Tate House</h1>
              <p className="text-xs lg:text-sm text-primary font-semibold" data-testid="ticker-symbol">$TATE</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <span className="bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium" data-testid="coming-soon-badge">
              Coming Soon
            </span>
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Launching</span>
            </div>
          </div>
        </div>
      </header>

      <HeroSection />
      <TimelineSection />
      <MemeGallery />
      <DefiManifesto />

      {/* Modern Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-6" data-testid="footer-title">Join the Revolution</h3>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center">
                <ContractAddress variant="footer" />
                <button 
                  className="group bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 text-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  data-testid="button-trade-footer"
                >
                  <span className="flex items-center space-x-2">
                    <span>Trade Now</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button 
                  className="group bg-accent/10 border border-accent/20 hover:bg-accent/20 text-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  data-testid="button-share-footer"
                >
                  <span className="flex items-center space-x-2">
                    <span>Share Story</span>
                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            <div className="border-t border-border/50 pt-8">
              <p className="text-muted-foreground mb-4 text-sm lg:text-base" data-testid="disclaimer">
                <strong>Disclaimer:</strong> This is not financial advice. This is just free speech with liquidity.
              </p>
              <p className="text-xs lg:text-sm text-muted-foreground" data-testid="footer-contract">
                Live 24H Tate House ($TATE) • Contract: 6sHUDDi6vFbZCEapCxtE1KeVRNcVuL7UtLEguB4VqGCm
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

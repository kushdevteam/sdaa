import ContractAddress from "./contract-address";

export default function HeroSection() {
  return (
    <section className="relative bg-background">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Modern Hero Content */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8" data-testid="coming-soon-indicator">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Coming Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-slide-up" data-testid="hero-title">
              Live 24H Tate House
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" data-testid="hero-description">
              A spontaneous moment outside Andrew Tate's house gave birth to a Solana meme. Within hours, the coin was live. Within minutes, it was banned. But the chain remembers.
            </p>
          </div>

          {/* Modern Stream Preview */}
          <div className="relative mb-12" data-testid="livestream-container">
            <div className="aspect-video bg-gradient-to-br from-card via-muted/20 to-card rounded-2xl modern-border relative overflow-hidden animate-scale-in" data-testid="stream-video">
              <div className="absolute inset-0 grid-overlay opacity-30"></div>
              
              {/* Central Coming Soon Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="glass-morphism rounded-2xl p-8 md:p-12 max-w-md mx-auto">
                  <div className="text-primary text-6xl md:text-8xl font-bold mb-4 animate-pulse" data-testid="coming-soon-badge">
                    24H
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                    Stream Launching Soon
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base mb-6">
                    The ultimate DeFi experience is coming
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContractAddress variant="hero" />

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 modern-glow"
              data-testid="button-trade-hero"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Trade on Solana</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button 
              className="group bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              data-testid="button-share-hero"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Share the Story</span>
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import andrewTateImage1 from "@assets/stock_images/andrew_tate_business_7d5fa54a.jpg";

export default function DefiManifesto() {
  const manifestoStatements = [
    {
      text: "DeFi isn't about permission. It's about persistence.",
      color: "primary",
    },
    {
      text: "Platforms can ban, silence, censor. The blockchain cannot.",
      color: "secondary", 
    },
    {
      text: "This meme coin is proof: decentralized means unstoppable.",
      color: "accent",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold gradient-text mb-4" data-testid="manifesto-title">
              The Philosophy
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Decentralized, unstoppable, uncensorable
            </p>
          </div>
          <div className="space-y-8 lg:space-y-12 mb-12 lg:mb-16">
            {manifestoStatements.map((statement, index) => {
              const colorMap = {
                primary: 'text-primary',
                secondary: 'text-secondary', 
                accent: 'text-accent'
              };
              return (
                <div 
                  key={index}
                  className="modern-border rounded-2xl p-6 lg:p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  data-testid={`manifesto-statement-${index}`}
                >
                  <p className={`text-xl lg:text-2xl font-semibold ${colorMap[statement.color as keyof typeof colorMap]} leading-relaxed`}>
                    "{statement.text}"
                  </p>
                </div>
              );
            })}
          </div>
          <div className="modern-border rounded-2xl overflow-hidden animate-fade-in" data-testid="manifesto-highlight">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 text-center">
              <div className="absolute inset-0 grid-overlay opacity-20"></div>
              <div className="relative">
                <p className="text-2xl lg:text-3xl font-bold mb-4 gradient-text" data-testid="manifesto-highlight-title">
                  Pump.fun tried to kick us out of the house.
                </p>
                <p className="text-xl lg:text-2xl text-foreground mb-6" data-testid="manifesto-highlight-subtitle">
                  We built our own. 🏠⚡
                </p>
                <div className="text-base lg:text-lg text-muted-foreground italic">
                  "The matrix tried to delete us. The blockchain made us immortal."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

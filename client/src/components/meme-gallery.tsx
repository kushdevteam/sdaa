export default function MemeGallery() {
  const memes = [
    {
      title: "Banned in Minutes",
      subtitle: "Immortal on-chain.",
      emoji: "🚫→⛓️",
      color: "primary",
      quote: "They tried to silence us. The blockchain said no."
    },
    {
      title: "No Permission", 
      subtitle: "Just free speech with liquidity.",
      emoji: "💬💰",
      color: "secondary",
      quote: "DeFi doesn't ask for permission."
    },
    {
      title: "Built Different",
      subtitle: "We built our own house.", 
      emoji: "🏠⚡",
      color: "accent",
      quote: "When they kick you out, build your own empire."
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold gradient-text mb-4" data-testid="meme-gallery-title">
              The Memes
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Banned by platforms, immortalized by the blockchain
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {memes.map((meme, index) => {
              const colorMap = {
                primary: 'text-primary border-primary',
                secondary: 'text-secondary border-secondary', 
                accent: 'text-accent border-accent'
              };
              return (
                <div 
                  key={index}
                  className="group modern-border rounded-2xl hover:scale-105 transition-all duration-300 p-6 lg:p-8 text-center animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`meme-card-${index}`}
                >
                  <div className="mb-6">
                    <div className="text-5xl lg:text-6xl mb-4" data-testid={`meme-emoji-${index}`}>
                      {meme.emoji}
                    </div>
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${colorMap[meme.color as keyof typeof colorMap].split(' ')[0]}`} data-testid={`meme-title-${index}`}>
                    {meme.title}
                  </h3>
                  <p className="text-base lg:text-lg mb-4 text-muted-foreground" data-testid={`meme-subtitle-${index}`}>
                    {meme.subtitle}
                  </p>
                  <blockquote className="text-sm lg:text-base text-muted-foreground italic border-l-2 border-accent pl-4 leading-relaxed">
                    "{meme.quote}"
                  </blockquote>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold mb-4" data-testid="meme-quote">
              "When they say no fun, we say pump fun (without Pump.fun)."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TimelineSection() {
  const timelineEvents = [
    {
      title: "Day 1",
      block: "Block #1",
      description: "Coin is born. The livestream begins.",
      color: "primary",
    },
    {
      title: "Hour 3", 
      block: "Block #1,080",
      description: "Banned from Pump.fun. The plot thickens.",
      color: "accent",
    },
    {
      title: "Hour 6",
      block: "Block #2,160", 
      description: "Still trading, still alive. DeFi finds a way.",
      color: "secondary",
    },
    {
      title: "SOON",
      block: "PENDING",
      description: "The stream launches. Get ready for 24H chaos.",
      color: "accent",
      isLive: false,
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold gradient-text mb-4" data-testid="timeline-title">
              The Story Unfolds
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              From birth to ban to blockchain immortality
            </p>
          </div>
          <div className="space-y-6 lg:space-y-8">
            {timelineEvents.map((event, index) => {
              const colorMap = {
                primary: 'border-primary text-primary',
                secondary: 'border-secondary text-secondary',
                accent: 'border-accent text-accent'
              };
              return (
                <div 
                  key={index}
                  className={`modern-border rounded-2xl p-6 lg:p-8 border-l-4 ${colorMap[event.color as keyof typeof colorMap]} relative animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`timeline-event-${index}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <h3 className={`text-xl lg:text-2xl font-bold ${colorMap[event.color as keyof typeof colorMap].split(' ')[1]} mb-2 lg:mb-0`} data-testid={`timeline-title-${index}`}>
                      {event.title}
                    </h3>
                    <span className="text-sm lg:text-base text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full w-fit" data-testid={`timeline-block-${index}`}>
                      {event.block}
                    </span>
                  </div>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed" data-testid={`timeline-description-${index}`}>
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

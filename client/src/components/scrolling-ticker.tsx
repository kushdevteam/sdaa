export default function ScrollingTicker() {
  const messages = [
    "🚨 BREAKING: Live 24H Tate House survives censorship attempt",
    "Pump.fun banned us in 3 hours but blockchain remembers forever", 
    "Dextools censored us - we built our own house",
    "DeFi means NO filter - unstoppable and uncensorable",
    "Still trading, still alive - the matrix can't delete us",
    "42,069 holders and growing - they tried to silence the truth",
    "CA: 6sHUDD... copied to clipboard by thousands daily"
  ];

  return (
    <div className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-3 overflow-hidden relative" data-testid="news-ticker">
      <div className="animate-scroll whitespace-nowrap">
        {messages.map((message, index) => (
          <span key={index} className="inline-block px-6 lg:px-8 text-sm lg:text-base font-medium" data-testid="ticker-content">
            {message} • 
          </span>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

const BlurredCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Your AI Prompt",
      subtitle: "Prompts templates",
      description: "Use pre-made templates to jumpstart creativity",
      icon: "🎁",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      id: 2,
      title: "Creative Writing",
      subtitle: "Story generators",
      description: "Transform ideas into compelling narratives",
      icon: "✍️",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      id: 3,
      title: "Code Assistant",
      subtitle: "Development tools",
      description: "Generate clean, efficient code snippets",
      icon: "💻",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      id: 4,
      title: "Business Plans",
      subtitle: "Strategy builders",
      description: "Create comprehensive business strategies",
      icon: "📊",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-500/20 to-orange-600/20"
    },
    {
      id: 5,
      title: "Marketing Copy",
      subtitle: "Content creation",
      description: "Craft persuasive marketing materials",
      icon: "📢",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-500/20 to-pink-600/20"
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const totalCards = cards.length;
    
    let normalizedDiff = diff;
    if (diff > totalCards / 2) {
      normalizedDiff = diff - totalCards;
    } else if (diff < -totalCards / 2) {
      normalizedDiff = diff + totalCards;
    }
    
    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1) return 'right';
    if (normalizedDiff === -1) return 'left';
    if (normalizedDiff === 2) return 'far-right';
    if (normalizedDiff === -2) return 'far-left';
    return 'hidden';
  };

  const getCardStyles = (position, index) => {
    const isCenter = position === 'center';
    
    const styles = {
      center: {
        transform: 'translateX(0%) scale(1)',
        zIndex: 50,
        opacity: 1,
        filter: 'blur(0px)'
      },
      left: {
        transform: 'translateX(-85%) scale(0.85)',
        zIndex: 30,
        opacity: 0.8,
        filter: 'blur(3px)'
      },
      right: {
        transform: 'translateX(85%) scale(0.85)',
        zIndex: 30,
        opacity: 0.8,
        filter: 'blur(3px)'
      },
      'far-left': {
        transform: 'translateX(-170%) scale(0.7)',
        zIndex: 20,
        opacity: 0.6,
        filter: 'blur(5px)'
      },
      'far-right': {
        transform: 'translateX(170%) scale(0.7)',
        zIndex: 20,
        opacity: 0.6,
        filter: 'blur(5px)'
      },
      hidden: {
        transform: 'translateX(0%) scale(0.5)',
        zIndex: 10,
        opacity: 0,
        filter: 'blur(8px)'
      }
    };
    
    return styles[position] || styles.hidden;
  };

  return (
    <div className="min-h-screen bg-[#03061C] flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.3),transparent)]"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <button
          onClick={prevCard}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextCard}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative h-[500px] flex items-center justify-center">
          {cards.map((card, index) => {
            const position = getCardPosition(index);
            const styles = getCardStyles(position, index);
            const isCenter = position === 'center';
            
            return (
              <div
                key={card.id}
                className="absolute w-96 h-80 cursor-pointer"
                style={{
                  ...styles,
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onClick={() => !isCenter && goToCard(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className={`w-full h-full rounded-3xl backdrop-blur-xl bg-[#653AD8] border border-white/20 shadow-2xl relative overflow-hidden group`}>
                  
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white text-xl shadow-lg">
                      {card.icon}
                    </div>
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    <div className="mt-8">
                      <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                        {card.title}
                      </h2>
                      <h3 className="text-3xl font-bold text-white/90 mb-6 leading-tight">
                        {card.subtitle}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed max-w-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-16 h-0.5 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
                  
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center mt-12 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 hover:bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlurredCardCarousel;
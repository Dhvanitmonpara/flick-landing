import React from 'react';

interface HowItWorksCardProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

const HowItWorksCard = ({ emoji, title, description, className }: HowItWorksCardProps) => {
  return (
    <div className={`max-w-80 h-64 ${className} text-left p-5 rounded-sm shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-transform`}>
      <div className="text-4xl mb-3">{emoji}</div>
      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksCard;

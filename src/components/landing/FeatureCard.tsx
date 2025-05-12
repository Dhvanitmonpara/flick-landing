import { JSX, ReactNode } from "react";

interface FeatureCardProps {
  icon: JSX.Element | string;
  title: string;
  description: ReactNode;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <span className="text-3xl">{icon}</span>;
    }
    return icon;
  };

  return (
    <div className="flex items-start sm:flex-col md:flex-row space-x-6 sm:space-x-0 md:space-x-6 sm:space-y-4 md:space-y-0 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-100/40 dark:bg-zinc-900/40 p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-200">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-200/70 dark:bg-zinc-800">
        {renderIcon()}
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-inter text-start font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-start text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

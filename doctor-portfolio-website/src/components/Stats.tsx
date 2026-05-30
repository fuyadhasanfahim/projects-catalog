import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import * as Icons from 'lucide-react';
import { STATS_ITEMS } from '../data';
import { Skeleton } from './SkeletonLoader';

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  // Format long numbers nicely with commas (e.g., 12,000)
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <span ref={ref} className="font-sans font-bold tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

interface StatsProps {
  isLoading: boolean;
}

export const Stats: React.FC<StatsProps> = ({ isLoading }) => {
  // Helper to map icon names to Lucide icons safely
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Icons.Award className="w-6 h-6 text-medical-blue" />;
      case 'Users':
        return <Icons.Users className="w-6 h-6 text-medical-blue" />;
      case 'Activity':
        return <Icons.Activity className="w-6 h-6 text-medical-blue" />;
      case 'HeartHandshake':
        return <Icons.HeartHandshake className="w-6 h-6 text-medical-blue" />;
      default:
        return <Icons.Shield className="w-6 h-6 text-medical-blue" />;
    }
  };

  return (
    <section id="stats" className="relative z-20 py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={`stat-sk-${i}`} variant="stat" />
              ))
            : STATS_ITEMS.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  id={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-slate-50/50 hover:bg-slate-50 border border-slate-100/70 rounded-2xl text-center group transition-colors duration-300 flex flex-col items-center justify-center"
                >
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-xs text-medical-blue group-hover:scale-110 group-hover:border-medical-blue/20 transition-all">
                    {getIcon(stat.iconName)}
                  </div>
                  
                  {/* Counter Value */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-medical-slate mt-4 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm font-medium text-medical-gray font-sans mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

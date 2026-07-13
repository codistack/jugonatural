/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Users, 
  Droplet, 
  Grape, 
  Truck 
} from 'lucide-react';
import { STATS } from '../data';

// Component for an individual animated counter
function Counter({ value, suffix, label, icon }: { value: number; suffix: string; label: string; icon: React.ReactNode; key?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    // Determine duration based on size
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60 FPS approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formattedCount = value % 1 === 0 ? count.toLocaleString() : count.toFixed(1);

  return (
    <div 
      ref={ref} 
      className="flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative group hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      
      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-2">
        {formattedCount}{suffix}
      </span>
      
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </span>
    </div>
  );
}

const icons = [
  <Users className="w-6 h-6" />,
  <Droplet className="w-6 h-6" />,
  <Grape className="w-6 h-6" />,
  <Truck className="w-6 h-6" />
];

export default function Stats() {
  return (
    <section 
      id="estadisticas" 
      className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={icons[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

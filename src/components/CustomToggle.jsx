import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const CustomToggle = ({ isToggled, onToggle, size = 'md' }) => {
  const sizes = {
    sm: {
      container: 'w-16 h-8',
      circle: 'w-6 h-6',
      icon: 'w-3 h-3',
      translate: 'translate-x-8'
    },
    md: {
      container: 'w-20 h-10',
      circle: 'w-8 h-8',
      icon: 'w-4 h-4',
      translate: 'translate-x-10'
    },
    lg: {
      container: 'w-24 h-12',
      circle: 'w-10 h-10',
      icon: 'w-5 h-5',
      translate: 'translate-x-12'
    }
  };

  const currentSize = sizes[size];

  return (
    <button
      onClick={onToggle}
      className={`
        ${currentSize.container}
        relative
        rounded-full
        p-1
        transition-all
        duration-300
        ease-in-out
        cursor-pointer
        focus:outline-none
        focus:ring-4
        focus:ring-orange-500/20
        ${isToggled 
          ? 'bg-slate-800 shadow-inner' 
          : 'bg-slate-700 shadow-lg'
        }
      `}
    >
      <div
        className={`
          ${currentSize.circle}
          absolute
          top-1
          left-1
          rounded-full
          transition-all
          duration-300
          cursor-pointer
          ease-in-out
          transform
          flex
          items-center
          justify-center
          ${isToggled 
            ? `${currentSize.translate} bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-500/25` 
            : 'translate-x-0 bg-gradient-to-br from-slate-600 to-slate-700 shadow-md'
          }
        `}
      >
        <Sparkles 
          className={`
            ${currentSize.icon}
            transition-all
            duration-300
            ${isToggled ? 'text-white' : 'text-slate-400'}
          `}
        />
      </div>
    </button>
  );
};

export default CustomToggle;
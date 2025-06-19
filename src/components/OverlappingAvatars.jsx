import React from 'react';

const Avatar = ({ src, alt, bgColor, size = 'md', zIndex = 0 }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  return (
    <div 
      className={`
        ${sizes[size]}
        rounded-full
        overflow-hidden
        border-[3px]
      border-[#16172D]
        shadow-lg
        relative
        ${bgColor}
      `}
      style={{ zIndex }}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt || 'Avatar'} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 bg-orange-500 transform rotate-45 rounded-sm"></div>
        </div>
      )}
    </div>
  );
};

const OverlappingAvatars = ({ 
  avatars = [], 
  maxVisible = 5, 
  size = 'md',
  spacing = '-ml-4',
  showCount = true 
}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <div 
          key={avatar.id || index}
          className={index > 0 ? spacing : ''}
        >
          <Avatar
            src={avatar.src}
            alt={avatar.alt}
            bgColor={avatar.bgColor}
            size={size}
            zIndex={visibleAvatars.length - index}
          />
        </div>
      ))}
      
      {showCount && remainingCount > 0 && (
        <div 
          className={`
            ${size === 'sm' ? 'w-12 h-12 text-xs' : ''}
            ${size === 'md' ? 'w-16 h-16 text-sm' : ''}
            ${size === 'lg' ? 'w-20 h-20 text-base' : ''}
            ${size === 'xl' ? 'w-24 h-24 text-lg' : ''}
            ${spacing}
            rounded-full
            bg-slate-600
            border-[3px]
            border-[#16172D]
            shadow-lg
            flex
            items-center
            justify-center
            text-white
            font-semibold
          `}
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default OverlappingAvatars
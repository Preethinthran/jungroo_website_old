import React, { /* useEffect, */ useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles = {
      backgroundColor: '#06041b', // Background color
      borderRadius: '16px', // Rounded corners
      position: 'relative' as const,
      width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
      height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    } as React.CSSProperties;

    return baseStyles;
  };

  return (
    <div
      ref={cardRef}
      style={getInlineStyles()}
      className={`
        ${getSizeClasses()}
        relative 
        p-4 
        gap-4 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export { GlowCard };
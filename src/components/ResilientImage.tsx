import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  eager = false,
  fallbackLabel = 'Buckland Gutters',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#1A222B] text-[#D8DEE4] p-6 text-center select-none ${className}`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="mb-3 text-[#9E421B]"
        >
          <path
            d="M4 26L20 12L36 26M9 22V34H31V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path d="M16 16V34M24 16V34" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
        </svg>
        <span className="font-mono text-xs tracking-wide text-[#EEF1F4]">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

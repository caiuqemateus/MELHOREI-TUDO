'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    loading?: boolean;
  }
  
  export default function Button({
    children,
    variant = 'primary',
    loading = false,
    className = '',
    ...props
  }: ButtonProps) {
    return (
      <button
        className={`btn ${variant} ${className}`}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? 'Carregando...' : children}
      </button>
    );
  }
  
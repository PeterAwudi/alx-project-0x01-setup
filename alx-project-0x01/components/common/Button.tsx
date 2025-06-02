import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import classNames from 'classnames';

export interface CustomButtonProps extends Omit<AntButtonProps, 'type'> {
  buttonType?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
}

export const Button: React.FC<CustomButtonProps> = ({
  buttonType = 'primary',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const buttonClasses = classNames(
    'transition-all duration-200',
    {
      'w-full': fullWidth,
      'bg-blue-600 hover:bg-blue-700 text-white border-none': buttonType === 'primary',
      // Secondary variant
      'bg-gray-100 hover:bg-gray-200 text-gray-800 border-none': buttonType === 'secondary',
      // Outline variant
      'bg-transparent hover:bg-gray-50 text-blue-600 border-blue-600': buttonType === 'outline',
      // Text variant
      'bg-transparent hover:bg-gray-50 text-blue-600 border-none': buttonType === 'text',
    },
    className
  );

  return (
    <AntButton
      type={buttonType === 'primary' ? 'primary' : 'default'}
      className={buttonClasses}
      {...props}
    >
      {children}
    </AntButton>
  );
}; 
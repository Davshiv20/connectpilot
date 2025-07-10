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
  style,
  ...props
}) => {
  const buttonClasses = classNames(
    {
      'button-full-width': fullWidth,
    },
    className
  );

  const buttonStyle = {
    width: fullWidth ? '100%' : undefined,
    ...style
  };

  // Map buttonType to Ant Design button types
  const getButtonType = () => {
    switch (buttonType) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'default';
      case 'outline':
        return 'default';
      case 'text':
        return 'text';
      default:
        return 'primary';
    }
  };

  return (
    <AntButton
      type={getButtonType()}
      className={buttonClasses}
      style={buttonStyle}
      {...props}
    >
      {children}
    </AntButton>
  );
}; 
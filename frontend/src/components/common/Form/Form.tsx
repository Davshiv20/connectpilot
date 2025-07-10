import React from 'react';
import { Form as AntForm } from 'antd';
import type { FormProps as AntFormProps, FormItemProps as AntFormItemProps } from 'antd';
import classNames from 'classnames';

export interface FormProps extends AntFormProps {
  spacing?: 'normal' | 'compact' | 'relaxed';
}

export interface FormItemProps extends AntFormItemProps {
  fullWidth?: boolean;
}

export const Form: React.FC<FormProps> = ({
  spacing = 'normal',
  className,
  children,
  ...props
}) => {
  const getSpacingStyle = () => {
    switch (spacing) {
      case 'compact':
        return { gap: '8px' };
      case 'relaxed':
        return { gap: '24px' };
      default:
        return { gap: '16px' };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...getSpacingStyle() }}>
      <AntForm
        className={className}
        {...props}
      >
        {children}
      </AntForm>
    </div>
  );
};

export const FormItem: React.FC<FormItemProps> = ({
  fullWidth = true,
  className,
  children,
  ...props
}) => {
  return (
    <AntForm.Item
      className={className}
      style={{ width: fullWidth ? '100%' : undefined }}
      {...props}
    >
      {children}
    </AntForm.Item>
  );
};

// Re-export useful Form utilities
export const { useForm, List: FormList } = AntForm; 
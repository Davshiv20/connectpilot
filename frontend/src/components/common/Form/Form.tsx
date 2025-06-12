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
  const formClasses = classNames(
    {
      'space-y-4': spacing === 'normal',
      'space-y-2': spacing === 'compact',
      'space-y-6': spacing === 'relaxed',
    },
    className
  );

  return (
    <AntForm
      className={formClasses}
      {...props}
    >
      {children}
    </AntForm>
  );
};

export const FormItem: React.FC<FormItemProps> = ({
  fullWidth = true,
  className,
  children,
  ...props
}) => {
  const itemClasses = classNames(
    {
      'w-full': fullWidth,
    },
    className
  );

  return (
    <AntForm.Item
      className={itemClasses}
      {...props}
    >
      {children}
    </AntForm.Item>
  );
};

// Re-export useful Form utilities
export const { useForm, List: FormList } = AntForm; 
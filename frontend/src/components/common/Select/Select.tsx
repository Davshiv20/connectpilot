import React from 'react';
import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd';
import classNames from 'classnames';

export interface SelectProps<T = any> extends AntSelectProps<T> {
  error?: boolean;
  helperText?: string;
}

export const Select = <T extends any>({
  error = false,
  helperText,
  className,
  ...props
}: SelectProps<T>) => {
  const selectClasses = classNames(
    'transition-all duration-200 w-full',
    {
      'border-red-500 hover:border-red-600': error,
    },
    className
  );

  return (
    <div className="w-full">
      <AntSelect
        className={selectClasses}
        status={error ? 'error' : undefined}
        {...props}
      />
      {helperText && (
        <p className={classNames(
          'mt-1 text-sm',
          error ? 'text-red-500' : 'text-gray-500'
        )}>
          {helperText}
        </p>
      )}
    </div>
  );
};

// Re-export Option for convenience
export const { Option } = AntSelect; 
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
    {
      'select-error': error,
    },
    className
  );

  return (
    <div style={{ width: '100%' }}>
      <AntSelect
        className={selectClasses}
        status={error ? 'error' : undefined}
        style={{ width: '100%' }}
        {...props}
      />
      {helperText && (
        <p style={{ 
          marginTop: '4px', 
          fontSize: '14px',
          color: error ? '#ff4d4f' : '#666'
        }}>
          {helperText}
        </p>
      )}
    </div>
  );
};

// Re-export Option for convenience
export const { Option } = AntSelect; 
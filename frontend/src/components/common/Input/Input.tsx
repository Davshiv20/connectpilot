import React from 'react';
import { Input as AntInput, message } from 'antd';
import type { InputProps as AntInputProps } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import classNames from 'classnames';
import { CopyTwoTone } from '@ant-design/icons';
import './Input.css';

export interface CustomInputProps extends AntInputProps {
  error?: boolean;
  helperText?: string;
}

export interface CustomTextAreaProps extends TextAreaProps {
  error?: boolean;
  helperText?: string;
  showCopy?: boolean;
}

export const Input: React.FC<CustomInputProps> = ({
  error = false,
  helperText,
  className,
  ...props
}) => {
  const inputClasses = classNames(
    {
      'input-error': error,
    },
    className
  );

  return (
    <div style={{ width: '100%' }}>
      <AntInput
        className={inputClasses}
        status={error ? 'error' : undefined}
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

export const TextArea: React.FC<CustomTextAreaProps> = ({
  error = false,
  helperText,
  className,
  value,
  
  ...props
}) => {
  const handleCopy = async () => {
    if (typeof value === 'string') {
      await navigator.clipboard.writeText(value);
      message.success('Message copied to clipboard!');
    }
  };

  return (
    <div className="textarea-container">
      <AntInput.TextArea
        className={className}
        status={error ? 'error' : undefined}
        value={value}
        {...props}
      />
      {helperText && (
        <p className={`helper-text ${error ? 'error' : 'default'}`}>
          {helperText}
        </p>
      )}
      { value && (
        <CopyTwoTone 
          height={32}
          width={32}
          className="copy-icon"
          onClick={handleCopy}
        />
      )}
    </div>
  );
}; 
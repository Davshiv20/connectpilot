import type { Rule } from 'antd/es/form';

export const required = (message = 'This field is required'): Rule => ({
  required: true,
  message,
});

export const email = (message = 'Please enter a valid email'): Rule => ({
  type: 'email',
  message,
});

export const minLength = (min: number, message?: string): Rule => ({
  min,
  message: message || `Must be at least ${min} characters`,
});

export const maxLength = (max: number, message?: string): Rule => ({
  max,
  message: message || `Must be at most ${max} characters`,
});

export const pattern = (regex: RegExp, message: string): Rule => ({
  pattern: regex,
  message,
});

// Common validation patterns
export const patterns = {
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  linkedinProfile: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
  phoneNumber: /^\+?[\d\s-()]{10,}$/,
};

// Validation rule sets for common fields
export const rules = {
  name: [
    required('Please enter a name'),
    minLength(2, 'Name must be at least 2 characters'),
    maxLength(50, 'Name must be at most 50 characters'),
  ],
  email: [
    required('Please enter an email'),
    email('Please enter a valid email address'),
  ],
  linkedinProfile: [
    required('Please enter your LinkedIn profile URL'),
    pattern(patterns.linkedinProfile, 'Please enter a valid LinkedIn profile URL'),
  ],
  message: [
    required('Please enter a message'),
    minLength(10, 'Message must be at least 10 characters'),
    maxLength(2000, 'Message must be at most 2000 characters'),
  ],
}; 
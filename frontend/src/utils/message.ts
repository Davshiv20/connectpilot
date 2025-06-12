export const replaceVariables = (
  template: string,
  variables: Record<string, string>
): string => {
  return Object.entries(variables).reduce(
    (text, [key, value]) => text.replace(new RegExp(`{${key}}`, 'g'), value),
    template
  );
};

export const extractVariables = (template: string): string[] => {
  const matches = template.match(/{([^}]+)}/g) || [];
  return matches.map(match => match.slice(1, -1));
};

export const validateTemplate = (template: string): boolean => {
  const variables = extractVariables(template);
  const uniqueVariables = new Set(variables);
  return variables.length === uniqueVariables.size;
};

export const sanitizeCompanyName = (name: string): string => {
  return name.trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, ' '); // Replace multiple spaces with single space
};

export const generateSubject = (
  recipientName: string,
  company: string,
  role?: string
): string => {
  if (role) {
    return `Regarding ${role} position at ${company}`;
  }
  return `Connection request - ${recipientName} from ${company}`;
};

export const truncateText = (
  text: string,
  maxLength: number = 100,
  suffix: string = '...'
): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}; 
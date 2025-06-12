export interface MessageTemplate {
    id: string;
    name: string;
    content: string;
    variables: string[]; // e.g., ["{name}", "{company}", "{role}"]
    category: 'email' | 'linkedin' | 'other';
    createdAt: string;
    updatedAt: string;
    platform: 'email' | 'linkedin' | 'other';
}

export interface GeneratedMessage extends MessageFormData {
    id: string;
    finalContent: string;
    createdAt: string;
    status: 'draft' | 'sent';
}

export interface MessageFormData {
    templateId: string;
    recipientName: string;
    company: string;
    jobId: string;
    role: string;
    platform: 'email' | 'linkedin' | 'other';
}

export interface FormValues {
    recipientName: string;
    company: string;
    jobId: string;
    role: string;
}

export type Platform = 'email' | 'linkedin' | 'other';

export interface Template {
    id: string;
    name: string;
    content: string;
    platform: 'email' | 'linkedin' | 'other';
}

// Redux state interfaces
export interface MessageState {
    templates: MessageTemplate[];
    generatedMessages: GeneratedMessage[];
    currentTemplate: MessageTemplate | null;
    isLoading: boolean;
    error: string | null;
} 
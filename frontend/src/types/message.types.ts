export interface MessageTemplate {
    id: string;
    name: string;
    content: string;
    variables: string[];
    category: 'email' | 'linkedin' | 'other';
    createdAt: string;
    updatedAt: string;
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
}

export interface FormValues {
    recipientName: string;
    company: string;
    jobId: string;
    role: string;
}


export interface Template {
    id: string;
    name: string;
    content: string;
}

// Redux state interfaces
export interface MessageState {
    templates: MessageTemplate[];
    generatedMessages: GeneratedMessage[];
    currentTemplate: MessageTemplate | null;
    isLoading: boolean;
    error: string | null;
} 
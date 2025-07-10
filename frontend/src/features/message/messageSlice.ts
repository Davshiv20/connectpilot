import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MessageState, MessageTemplate, GeneratedMessage } from '../../types/message.types';

const sampleTemplates: MessageTemplate[] = [
  {
    id: '1',
    name: 'LinkedIn Connection Request',
    content: `Hi {name},

I noticed you work at {company} and I'm very interested in the {role} position (Job ID: {jobId}). I've applied through your careers portal and would love to connect to learn more about the role and team.

Best regards,
{name}`,
    variables: ['{name}', '{company}', '{role}', '{jobId}'],
    category: 'linkedin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Cold Email Follow-up',
    content: `Dear {name},

I recently applied for the {role} position at {company} (Job ID: {jobId}) and wanted to follow up on my application. I'm particularly excited about this opportunity because of [your specific reason].

I would appreciate any information about the next steps in the hiring process.

Best regards,
{name}`,
    variables: ['{name}', '{company}', '{role}', '{jobId}'],
    category: 'email',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const initialState: MessageState = {
    templates: sampleTemplates,
    generatedMessages: [],
    currentTemplate: null,
    isLoading: false,
    error: null,
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setTemplates: (state, action: PayloadAction<MessageTemplate[]>) => {
            state.templates = action.payload;
        },
        addTemplate: (state, action: PayloadAction<MessageTemplate>) => {
            state.templates.push(action.payload);
        },
        setCurrentTemplate: (state, action: PayloadAction<MessageTemplate | null>) => {
            state.currentTemplate = action.payload;
        },
        addGeneratedMessage: (state, action: PayloadAction<GeneratedMessage>) => {
            state.generatedMessages.push(action.payload);
        },
        updateGeneratedMessage: (state, action: PayloadAction<GeneratedMessage>) => {
            const index = state.generatedMessages.findIndex(msg => msg.id === action.payload.id);
            if (index !== -1) {
                state.generatedMessages[index] = action.payload;
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const {
    setTemplates,
    addTemplate,
    setCurrentTemplate,
    addGeneratedMessage,
    updateGeneratedMessage,
    setLoading,
    setError,
} = messageSlice.actions;

export default messageSlice.reducer; 
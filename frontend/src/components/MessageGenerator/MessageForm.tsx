import React, { useEffect, useState } from 'react';
import { Typography, Card, Form as AntForm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import type { MessageFormData, FormValues, MessageTemplate } from '../../types/message.types';
import type { RootState } from '../../app/store';
import { addGeneratedMessage, setCurrentTemplate } from '../../features/message/messageSlice';
import { Button, Input, Select, FormItem, TextArea } from '../../components/common';
import { replaceVariables, sanitizeCompanyName } from '../../utils';
import styles from './MessageForm.module.css';
import { Constants } from './constants';


const { Title } = Typography;
const { useForm } = AntForm;

const initialFormValues: FormValues = {
    recipientName: '',
    company: '',
    jobId: '',
    role: ''
};

export const MessageForm: React.FC = () => {
    const dispatch = useDispatch();
    const templates = useSelector((state: RootState) => state.message.templates);
    const currentTemplate = useSelector((state: RootState) => state.message.currentTemplate) as MessageTemplate | null;
    
    const [form] = useForm<MessageFormData>();
    const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
    const [previewContent, setPreviewContent] = useState<string>('');

    useEffect(() => {
        return () => {
            dispatch(setCurrentTemplate(null));
            setFormValues(initialFormValues);
        };
    }, [dispatch]);

    useEffect(() => {
        if (currentTemplate) {
            updatePreview();
        }
    }, [currentTemplate, formValues]);

    const updatePreview = () => {
        if (!currentTemplate) return;

        const variables = {
            name: formValues.recipientName,
            company: sanitizeCompanyName(formValues.company),
            role: formValues.role || '',
            jobId: formValues.jobId || ''
        };

        const preview = replaceVariables(currentTemplate.content, variables);
        setPreviewContent(preview);
    };

    const handleTemplateChange = (templateId: string) => {
        const template = templates.find(t => t.id === templateId) as MessageTemplate;
        if (template) {
            form.setFieldsValue({ templateId });
            dispatch(setCurrentTemplate(template));
        } else {
            dispatch(setCurrentTemplate(null));
        }
    };

    const handleFieldChange = () => {
        const newValues = form.getFieldsValue();
        setFormValues({
            recipientName: newValues.recipientName || '',
            company: newValues.company || '',
            jobId: newValues.jobId || '',
            role: newValues.role || ''
        });
    };

    const handleSubmit = (values: MessageFormData) => {
        const template = templates.find(t => t.id === values.templateId) as MessageTemplate;
        if (!template) return;

        const newMessage = {
            id: Date.now().toString(),
            templateId: values.templateId,
            finalContent: previewContent,
            recipientName: values.recipientName,
            company: sanitizeCompanyName(values.company),
            role: values.role,
            jobId: values.jobId,
            platform: template.platform,
            createdAt: new Date().toISOString(),
            status: 'draft' as const,
        };

        dispatch(addGeneratedMessage(newMessage));
        form.resetFields();
        dispatch(setCurrentTemplate(null));
        setFormValues(initialFormValues);
        setPreviewContent('');
    };

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <div className={styles.formGrid}>
                    <div className={styles.formSection}>
                        <Title level={4}>{Constants.PAGE_TITLE}</Title>
                        <AntForm
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            onFieldsChange={handleFieldChange}
                        >
                            <FormItem
                                name="templateId"
                                rules={[{ required: true, message: 'Please select a template' }]}
                            >
                                <Select 
                                    onChange={handleTemplateChange}
                                    placeholder="Select message template"
                                >
                                    {templates.map(template => (
                                        <option key={template.id} value={template.id}>
                                            {template.name}
                                        </option>
                                    ))}
                                </Select>
                            </FormItem>

                            <FormItem
                                name="recipientName"
                                rules={[{ required: true, message: 'Please enter person name' }]}
                            >
                                <Input placeholder="Person Name" />
                            </FormItem>

                            <FormItem
                                name="company"
                                rules={[{ required: true, message: 'Please enter company name' }]}
                            >
                                <Input placeholder="Company" />
                            </FormItem>

                            <FormItem
                                name="jobId"
                                rules={[{ required: true, message: 'Please enter job ID or link' }]}
                            >
                                <Input placeholder="Job ID/ Job link" />
                            </FormItem>

                            <FormItem
                                name="role"
                                rules={[{ required: true, message: 'Please enter the role' }]}
                            >
                                <Input placeholder="Role you're applying to" />
                            </FormItem>

                            <div className={styles.generateButton}>
                                <Button 
                                    buttonType="primary" 
                                    htmlType="submit"
                                    fullWidth
                                >
                                    {Constants.GENERATE}
                                </Button>
                            </div>
                        </AntForm>
                    </div>

                    <div className={styles.previewSection}>
                        <Title level={4} className={styles.previewTitle}>
                            Message Preview
                        </Title>
                        {currentTemplate ? (
                            <>
                            <TextArea
                                value={previewContent}
                                readOnly
                                rows={10}
                            />
                           
                            </>
                        ) : (
                            <div className={styles.previewPlaceholder}>
                                Select a template to see the preview
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}; 
// Route constants for the application
export const ROUTES = {
    // Main generator page
    MAIN: '/',
    // Templates management
    TEMPLATES: '/templates',
    // History of generated messages
    HISTORY: '/history',
    // Settings page for customization
    SETTINGS: '/settings'
} as const;

// Export individual routes for convenience
export const MAIN_ROUTE = ROUTES.MAIN;
export const TEMPLATES_ROUTE = ROUTES.TEMPLATES;
export const HISTORY_ROUTE = ROUTES.HISTORY;
export const SETTINGS_ROUTE = ROUTES.SETTINGS;

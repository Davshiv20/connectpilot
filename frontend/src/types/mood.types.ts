export interface MoodEntry {
    id: string;
    mood: number; // 1-5 scale
    note?: string;
    activities: string[];
    timestamp: string;
}

export interface MoodState {
    entries: MoodEntry[];
    isLoading: boolean;
    error: string | null;
} 
export interface Question {
    id: number;
    priority: number;
    question: string;
    teamingStage: string;
    appearsDay: number;
    frequency: number;
    questionType: string;
    role: string;
    required: string;
    conditions: string;
    mapping: string;
}
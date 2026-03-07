export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface ExamProblem {
    id: string;
    title: string;
    problem: string; // HTML content
    solution: string; // HTML content
}

export interface LessonSection {
    id: string;
    title: string;
    content: string; // HTML content with math support
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    sections: LessonSection[];
    keyFormulas: string[];
    quiz: QuizQuestion[];
    examProblems?: ExamProblem[];
}

export interface Subject {
    id: string;
    name: string;
    icon: string;
    color: string;
    gradient: string;
    description: string;
    lessons: Lesson[];
    examCoefficient: number;
}

export interface StudyProgress {
    lessonId: string;
    completed: boolean;
    quizScore: number | null;
    lastStudied: string | null;
    sectionsCompleted: string[];
}

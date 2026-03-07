import { Subject, Lesson } from "./types";
import { mathLessons } from "./math-lessons";
import { limitsLesson } from "./math-limits";
import { diffEqLesson } from "./math-diffeq";
import { complexLesson } from "./math-complex";
import { probabilityLesson, integralsLesson, spaceGeometryLesson, arithmeticLesson } from "./math-extra";
import { continuityExtra, derivativesExtra, exponentialExtra, logarithmExtra, primitivesExtra, sequencesExtra } from "./math-supplements";
import { pcLessons } from "./pc-lessons";
import { pcLessonsNew } from "./pc-lessons-new";
import { pcLessonsRest } from "./pc-lessons-rest";
import { englishLessons } from "./english-lessons";
import { englishLessonsNew } from "./english-lessons-new";
import { svtLessons } from "./svt-lessons";
import { philosophyLessons } from "./philosophy-lessons";

const allPcLessons = [...pcLessons, ...pcLessonsNew, ...pcLessonsRest];

// Map of extra content per lesson id
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const supplementMap: Record<string, { quiz: any[], examProblems: any[] }> = {
    "math-continuity": continuityExtra,
    "math-derivatives": derivativesExtra,
    "math-exponential": exponentialExtra,
    "math-logarithm": logarithmExtra,
    "math-primitives": primitivesExtra,
    "math-sequences": sequencesExtra,
};

// Merge supplements into existing lessons
const enhancedMathLessons: Lesson[] = mathLessons.map(lesson => {
    const extra = supplementMap[lesson.id];
    if (extra) {
        return {
            ...lesson,
            quiz: [...lesson.quiz, ...extra.quiz],
            examProblems: extra.examProblems,
        };
    }
    return lesson;
});

const allMathLessons = [
    limitsLesson,
    ...enhancedMathLessons,
    integralsLesson,
    diffEqLesson,
    complexLesson,
    probabilityLesson,
    spaceGeometryLesson,
    arithmeticLesson,
];

export const subjects: Subject[] = [
    {
        id: "math",
        name: "Mathematics",
        icon: "∑",
        color: "#4f8cf7",
        gradient: "linear-gradient(135deg, #4f8cf7, #6366f1)",
        description: "Limits, Continuity, Derivatives, Exponential, Logarithm, Primitives, Integrals, Sequences, Diff Equations, Complex Numbers, Probability, Space Geometry, Arithmetic",
        lessons: allMathLessons,
        examCoefficient: 7,
    },
    {
        id: "pc",
        name: "Physics & Chemistry",
        icon: "⚛",
        color: "#a855f7",
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
        description: "Waves, Nuclear Physics, Circuits, Mechanics, Acids & Bases, Electrochemistry",
        lessons: allPcLessons,
        examCoefficient: 7,
    },
    {
        id: "svt",
        name: "Life & Earth Science",
        icon: "🧬",
        color: "#34d399",
        gradient: "linear-gradient(135deg, #34d399, #22d3ee)",
        description: "Cellular Respiration, Genetics, Soil & Water, Plate Tectonics",
        lessons: svtLessons,
        examCoefficient: 5,
    },
    {
        id: "philosophy",
        name: "Philosophy",
        icon: "💭",
        color: "#f97316",
        gradient: "linear-gradient(135deg, #f97316, #facc15)",
        description: "الوضع البشري، المعرفة، السياسة، الأخلاق",
        lessons: philosophyLessons,
        examCoefficient: 2,
    },
    {
        id: "english",
        name: "English",
        icon: "📝",
        color: "#22d3ee",
        gradient: "linear-gradient(135deg, #22d3ee, #4f8cf7)",
        description: "Gifts of Youth, Moroccan Culture, Women & Power, Science, Humour, Citizenship, etc.",
        lessons: [...englishLessons, ...englishLessonsNew],
        examCoefficient: 2,
    },
];

export const examDate = new Date("2026-06-04");

export function getDaysRemaining(): number {
    const now = new Date();
    const diff = examDate.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function getStudyStats() {
    const totalLessons = subjects.reduce((acc, s) => acc + s.lessons.length, 0);
    const totalQuizQuestions = subjects.reduce(
        (acc, s) => acc + s.lessons.reduce((a, l) => a + l.quiz.length, 0),
        0
    );
    const totalSections = subjects.reduce(
        (acc, s) => acc + s.lessons.reduce((a, l) => a + l.sections.length, 0),
        0
    );
    return { totalLessons, totalQuizQuestions, totalSections };
}

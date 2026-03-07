"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { StudyProgress } from "@/data/types";

interface ProgressContextType {
    progress: Record<string, StudyProgress>;
    markSectionCompleted: (lessonId: string, sectionId: string) => void;
    markLessonCompleted: (lessonId: string) => void;
    saveQuizScore: (lessonId: string, score: number) => void;
    getProgress: (lessonId: string) => StudyProgress | null;
    getOverallProgress: () => { completed: number; total: number; percentage: number };
    resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = "bac-study-progress";

export function ProgressProvider({ children, totalLessons }: { children: React.ReactNode; totalLessons: number }) {
    const [progress, setProgress] = useState<Record<string, StudyProgress>>({});

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setProgress(JSON.parse(stored));
            }
        } catch { }
    }, []);

    const saveToStorage = useCallback((newProgress: Record<string, StudyProgress>) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
        } catch { }
    }, []);

    const markSectionCompleted = useCallback((lessonId: string, sectionId: string) => {
        setProgress((prev) => {
            const current = prev[lessonId] || {
                lessonId,
                completed: false,
                quizScore: null,
                lastStudied: null,
                sectionsCompleted: [],
            };
            if (current.sectionsCompleted.includes(sectionId)) return prev;
            const updated = {
                ...prev,
                [lessonId]: {
                    ...current,
                    sectionsCompleted: [...current.sectionsCompleted, sectionId],
                    lastStudied: new Date().toISOString(),
                },
            };
            saveToStorage(updated);
            return updated;
        });
    }, [saveToStorage]);

    const markLessonCompleted = useCallback((lessonId: string) => {
        setProgress((prev) => {
            const current = prev[lessonId] || {
                lessonId,
                completed: false,
                quizScore: null,
                lastStudied: null,
                sectionsCompleted: [],
            };
            const updated = {
                ...prev,
                [lessonId]: {
                    ...current,
                    completed: true,
                    lastStudied: new Date().toISOString(),
                },
            };
            saveToStorage(updated);
            return updated;
        });
    }, [saveToStorage]);

    const saveQuizScore = useCallback((lessonId: string, score: number) => {
        setProgress((prev) => {
            const current = prev[lessonId] || {
                lessonId,
                completed: false,
                quizScore: null,
                lastStudied: null,
                sectionsCompleted: [],
            };
            const updated = {
                ...prev,
                [lessonId]: {
                    ...current,
                    quizScore: Math.max(score, current.quizScore ?? 0),
                    lastStudied: new Date().toISOString(),
                },
            };
            saveToStorage(updated);
            return updated;
        });
    }, [saveToStorage]);

    const getProgress = useCallback((lessonId: string): StudyProgress | null => {
        return progress[lessonId] || null;
    }, [progress]);

    const getOverallProgress = useCallback(() => {
        const completed = Object.values(progress).filter((p) => p.completed).length;
        return {
            completed,
            total: totalLessons,
            percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
        };
    }, [progress, totalLessons]);

    const resetProgress = useCallback(() => {
        setProgress({});
        localStorage.removeItem(STORAGE_KEY);
    }, []);

    return (
        <ProgressContext.Provider
            value={{
                progress,
                markSectionCompleted,
                markLessonCompleted,
                saveQuizScore,
                getProgress,
                getOverallProgress,
                resetProgress,
            }}
        >
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error("useProgress must be used within a ProgressProvider");
    }
    return context;
}

"use client";

import { ProgressProvider } from "@/context/ProgressContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { getStudyStats } from "@/data/subjects";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { totalLessons } = getStudyStats();

    return (
        <AuthProvider>
            <ProgressProvider totalLessons={totalLessons}>
                <div className="relative flex h-auto min-h-screen w-full flex-col academic-gradient overflow-x-hidden bg-background-light dark:bg-background-dark">
                    <div className="layout-container flex h-full grow flex-col">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </ProgressProvider>
        </AuthProvider>
    );
}

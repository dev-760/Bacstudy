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
                <Navbar />
                <main style={{ paddingTop: 64, minHeight: "100vh" }}>{children}</main>
            </ProgressProvider>
        </AuthProvider>
    );
}

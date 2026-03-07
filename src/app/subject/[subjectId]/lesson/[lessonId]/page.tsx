"use client";

import { use } from "react";
import ClientLayout from "@/components/ClientLayout";
import LessonView from "@/components/LessonView";
import { subjects } from "@/data/subjects";
import Link from "next/link";
import { notFound } from "next/navigation";
import AIChat from "@/components/AIChat";

function LessonContent({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const subject = subjects.find((s) => s.id === subjectId);
  if (!subject) return notFound();
  const lesson = subject.lessons.find((l) => l.id === lessonId);
  if (!lesson) return notFound();

  const idx = subject.lessons.findIndex((l) => l.id === lessonId);
  const prev = idx > 0 ? subject.lessons[idx - 1] : null;
  const next = idx < subject.lessons.length - 1 ? subject.lessons[idx + 1] : null;

  return (
    <div className="page-wrapper" style={{ paddingTop: 24, maxWidth: 1060 }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 20, fontSize: "0.8rem", flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "#6b7280", transition: "color 0.2s" }}>Dashboard</Link>
        <span style={{ color: "#374151" }}>/</span>
        <Link href={`/subject/${subjectId}`} style={{ color: subject.color, transition: "color 0.2s" }}>{subject.name}</Link>
        <span style={{ color: "#374151" }}>/</span>

        <span style={{ color: "#9ca3af", fontWeight: 500 }}>{lesson.title}</span>
      </div>

      <LessonView lesson={lesson} accentColor={subject.color} gradient={subject.gradient} />

      {/* Prev / Next */}
      <div style={{
        display: "flex", justifyContent: "space-between", gap: 12,
        marginTop: 40, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
      }}>
        {prev ? (
          <Link href={`/subject/${subjectId}/lesson/${prev.id}`} style={{
            display: "flex", flexDirection: "column", gap: 3,
            padding: "14px 18px", background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13,
            textDecoration: "none", color: "inherit", transition: "all 0.3s",
            maxWidth: "48%", flex: "1 1 200px",
          }} className="nav-card">
            <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>← Previous</span>
            <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/subject/${subjectId}/lesson/${next.id}`} style={{
            display: "flex", flexDirection: "column", gap: 3,
            padding: "14px 18px", background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)", borderRadius: 13,
            textDecoration: "none", color: "inherit", transition: "all 0.3s",
            textAlign: "right", maxWidth: "48%", flex: "1 1 200px", marginLeft: "auto",
          }} className="nav-card">
            <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>Next →</span>
            <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{next.title}</span>
          </Link>
        ) : <div />}
      </div>

      <style jsx global>{`
        .nav-card:hover {
          border-color: rgba(255,255,255,0.1) !important;
          background: rgba(255,255,255,0.04) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 600px) {
          .nav-card {
            max-width: 100% !important;
            flex-basis: 100% !important;
          }
        }
      `}</style>
      <AIChat
        lessonTitle={lesson.title}
        context={`Subject: ${subject.name}. Lesson: ${lesson.title} - ${lesson.description}. Key formulas: ${lesson.keyFormulas.slice(0, 3).join("; ")}`}
        accentColor={subject.color}
      />
    </div>
  );
}

export default function LessonPage({ params }: { params: Promise<{ subjectId: string; lessonId: string }> }) {
  const { subjectId, lessonId } = use(params);
  return <ClientLayout><LessonContent subjectId={subjectId} lessonId={lessonId} /></ClientLayout>;
}

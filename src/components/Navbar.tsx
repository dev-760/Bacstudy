"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { subjects } from "@/data/subjects";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, signOut, loading: authLoading } = useAuth();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 70,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/logo.svg"
              alt="BACStudy"
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(59,130,246,0.3)"
              }}
            />
            <span style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "-0.02em" }}>
              BAC<span style={{ color: "#3b82f6" }}>Study</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="desktop-nav"
          >
            <NavLink href="/" active={pathname === "/"} label="Home" icon="🏠" />
            {subjects.filter(s => s.lessons.length > 0).map((s) => (
              <NavLink
                key={s.id}
                href={`/subject/${s.id}`}
                active={pathname.startsWith(`/subject/${s.id}`)}
                label={s.name}
                icon={s.icon}
                color={s.color}
              />
            ))}
          </div>

          {/* Profile / Login */}
          <div ref={profileRef} style={{ position: "relative", marginLeft: 8 }} className="desktop-nav">
            {authLoading ? null : user ? (
              <>
                <button onClick={() => setProfileOpen(!profileOpen)} style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                  color: "#fff", fontWeight: 700, fontSize: "0.9rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "none", cursor: "pointer", transition: "transform 0.2s"
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {(user.user_metadata?.full_name?.[0] || user.email?.[0] || "U").toUpperCase()}
                </button>
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute", top: 48, right: 0, minWidth: 220, padding: 8,
                        background: "rgba(10,10,16,0.95)", border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 16, backdropFilter: "blur(24px)", zIndex: 200,
                        boxShadow: "0 12px 48px rgba(0,0,0,0.5)"
                      }}>
                      <div style={{ padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 8 }}>
                        <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>{user.user_metadata?.full_name || "Student"}</p>
                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 2 }}>{user.email}</p>
                      </div>
                      <button onClick={() => { signOut(); setProfileOpen(false); }} style={{
                        width: "100%", padding: "12px 14px", borderRadius: 10, fontSize: "0.85rem",
                        background: "rgba(239,68,68,0.05)", border: "none", color: "#ef4444",
                        fontWeight: 600, cursor: "pointer", textAlign: "left", transition: "background 0.2s"
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.05)")}
                      >🚪 Sign Out</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link href="/auth" style={{
                padding: "8px 20px", borderRadius: 12, fontSize: "0.85rem", fontWeight: 600,
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                color: "#fff", textDecoration: "none", whiteSpace: "nowrap", transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block"
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)"; }}
              >Sign In</Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              display: "none",
              width: 44,
              height: 44,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 70,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              background: "rgba(5,5,8,0.98)",
              backdropFilter: "blur(24px)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              overflowY: "auto",
            }}
          >
            <MobileNavLink href="/" active={pathname === "/"} label="Home" icon="🏠" />
            {subjects.map((s) => (
              <MobileNavLink
                key={s.id}
                href={`/subject/${s.id}`}
                active={pathname.startsWith(`/subject/${s.id}`)}
                label={s.name}
                icon={s.icon}
                disabled={s.lessons.length === 0}
              />
            ))}
            <div style={{ marginTop: 12, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {user ? (
                <>
                  <div style={{ padding: "12px 16px", fontSize: "0.9rem", background: "rgba(255,255,255,0.02)", borderRadius: 12, marginBottom: 16 }}>
                    <p style={{ fontWeight: 700, color: "#fff" }}>{user.user_metadata?.full_name || "Student"}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 2 }}>{user.email}</p>
                  </div>
                  <button onClick={() => { signOut(); setMenuOpen(false); }} style={{
                    width: "100%", padding: "16px", borderRadius: 14, fontSize: "1rem", fontWeight: 600,
                    background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", color: "#ef4444",
                    cursor: "pointer", textAlign: "left",
                  }}>🚪 Sign Out</button>
                </>
              ) : (
                <Link href="/auth" onClick={() => setMenuOpen(false)} style={{
                  display: "block", padding: "16px", borderRadius: 14, textAlign: "center",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff",
                  fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)"
                }}>Sign In / Sign Up</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({
  href,
  active,
  label,
  icon,
  color,
}: {
  href: string;
  active: boolean;
  label: string;
  icon: string;
  color?: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderRadius: 12,
        fontSize: "0.85rem",
        fontWeight: 600,
        color: active ? "#fff" : "var(--text-secondary)",
        background: active ? "rgba(255,255,255,0.06)" : "transparent",
        transition: "all 0.2s",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)"; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = active ? "rgba(255,255,255,0.06)" : "transparent"; }}
    >
      <span style={{ fontSize: "1rem", filter: active ? "none" : "grayscale(30%)" }}>{icon}</span>
      {label}
      {active && color && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({
  href,
  active,
  label,
  icon,
  disabled,
}: {
  href: string;
  active: boolean;
  label: string;
  icon: string;
  disabled?: boolean;
}) {
  return (
    <Link
      href={disabled ? "#" : href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px",
        borderRadius: 14,
        fontSize: "1rem",
        fontWeight: active ? 700 : 500,
        color: disabled ? "var(--text-muted)" : active ? "#fff" : "var(--text-secondary)",
        background: active ? "rgba(255,255,255,0.05)" : "transparent",
        border: active ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        transition: "all 0.2s",
        textDecoration: "none",
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
    >
      <span style={{ fontSize: "1.3rem" }}>{icon}</span>
      {label}
      {disabled && (
        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.75rem",
            padding: "4px 10px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.05)",
            color: "var(--text-muted)",
          }}
        >
          Soon
        </span>
      )}
    </Link>
  );
}

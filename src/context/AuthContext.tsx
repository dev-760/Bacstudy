"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
    signIn: (email: string, password: string) => Promise<{ error: string | null }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!supabase) {
            // Local Mock Session
            const localSession = localStorage.getItem("mock_session");
            if (localSession) {
                const parsed = JSON.parse(localSession);
                setUser(parsed.user);
                setSession(parsed.session);
            }
            setLoading(false);
            return;
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signUp = useCallback(async (email: string, password: string, name: string) => {
        if (!supabase) {
            // Mock signup
            const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
            if (users[email]) return { error: "User already exists" };
            users[email] = { password, name };
            localStorage.setItem("mock_users", JSON.stringify(users));
            return { error: null };
        }
        const { error } = await supabase.auth.signUp({
            email, password,
            options: { data: { full_name: name } },
        });
        return { error: error?.message ?? null };
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        if (!supabase) {
            // Mock login
            const users = JSON.parse(localStorage.getItem("mock_users") || "{}");
            const userData = users[email];
            if (!userData || userData.password !== password) {
                return { error: "Invalid email or password" };
            }
            const dummyUser = { id: email, email, user_metadata: { full_name: userData.name } } as unknown as User;
            const dummySession = { user: dummyUser, access_token: "mock-token" } as unknown as Session;
            localStorage.setItem("mock_session", JSON.stringify({ user: dummyUser, session: dummySession }));
            setUser(dummyUser);
            setSession(dummySession);
            return { error: null };
        }
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        return { error: error?.message ?? null };
    }, []);

    const signOut = useCallback(async () => {
        if (!supabase) {
            // Mock signout
            localStorage.removeItem("mock_session");
            setUser(null);
            setSession(null);
            return;
        }
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}

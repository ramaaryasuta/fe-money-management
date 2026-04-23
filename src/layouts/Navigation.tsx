import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
    id: string;
    label: string;
    mobileLabel: string;
    icon: React.ReactNode;
}

export interface User {
    name: string;
    initials: string;
}

export interface NavigationProps {
    navItems: NavItem[];
    activeId: string;
    onNavigate: (id: string) => void;
    appName?: string;
    appInitial?: string;
    user?: User;
    children?: React.ReactNode;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

export const DashboardIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
);

export const WalletIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M16 12h2" />
        <path d="M2 10h20" />
    </svg>
);

export const TransactionIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4m0 0L3 8m4-4l4 4" />
        <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
    </svg>
);

export const SettingsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────

interface SidebarProps {
    navItems: NavItem[];
    activeId: string;
    onNavigate: (id: string) => void;
    appName?: string;
    appInitial?: string;
    user?: User;
}

export function Sidebar({
    navItems,
    activeId,
    onNavigate,
    appName = "App",
    appInitial,
    user,
}: SidebarProps) {
    const initial = appInitial ?? appName.charAt(0).toUpperCase();

    return (
        <aside className="hidden md:flex flex-col w-52 min-h-screen bg-white border-r border-gray-100 py-5 px-3 fixed left-0 top-0 z-30">
            {/* Logo */}
            <div className="flex items-center gap-2.5 px-2 mb-8">
                <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {initial}
                </div>
                <span className="font-semibold text-gray-900 text-sm tracking-tight">{appName}</span>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-0.5 flex-1">
                {navItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 w-full text-left group
                ${isActive
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                                }`}
                        >
                            <span
                                className={`transition-colors ${isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                                    }`}
                            >
                                {item.icon}
                            </span>
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            {/* User */}
            {user && (
                <div className="flex items-center gap-2.5 px-2 mt-4 pt-4 border-t border-gray-100">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-semibold flex-shrink-0">
                        {user.initials}
                    </div>
                    <span className="text-sm text-gray-600 font-medium truncate">{user.name}</span>
                </div>
            )}
        </aside>
    );
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────

interface TopBarProps {
    navItems: NavItem[];
    activeId: string;
}

export function TopBar({ navItems, activeId }: TopBarProps) {
    const current = navItems.find((i) => i.id === activeId);
    return (
        <header className="flex items-center h-14 px-6 bg-white border-b border-gray-100 fixed top-0 left-0 md:left-52 right-0 z-20">
            <h1 className="text-sm font-semibold text-gray-800">
                {current?.label ?? ""}
            </h1>
        </header>
    );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────

interface BottomNavProps {
    navItems: NavItem[];
    activeId: string;
    onNavigate: (id: string) => void;
}

export function BottomNav({ navItems, activeId, onNavigate }: BottomNavProps) {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-100">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className="flex flex-col items-center gap-1 py-2 px-3 flex-1 transition-all"
                        >
                            <span
                                className={`transition-colors duration-150 ${isActive ? "text-gray-900" : "text-gray-400"
                                    }`}
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`text-[10px] font-medium transition-colors duration-150 ${isActive ? "text-gray-900" : "text-gray-400"
                                    }`}
                            >
                                {item.mobileLabel}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

// ─── Navigation (composed) ────────────────────────────────────────────────────

export function Navigation({
    navItems,
    activeId,
    onNavigate,
    appName,
    appInitial,
    user,
    children,
}: NavigationProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar
                navItems={navItems}
                activeId={activeId}
                onNavigate={onNavigate}
                appName={appName}
                appInitial={appInitial}
                user={user}
            />
            <TopBar navItems={navItems} activeId={activeId} />
            <main className="md:ml-52 mt-14 pb-20 md:pb-0">
                {children}
            </main>
            <BottomNav navItems={navItems} activeId={activeId} onNavigate={onNavigate} />
        </div>
    );
}

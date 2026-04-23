import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WalletCardProps {
    name: string;
    balance: number;
    label?: string;
    badge?: string;
    icon?: React.ReactNode;
    badgeColor?: "blue" | "orange" | "green" | "gray";
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatRupiah = (amount: number): string =>
    "Rp " + amount.toLocaleString("id-ID");

const badgeStyles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-500",
    gray: "bg-gray-100 text-gray-500",
};

// ─── Default Icon ─────────────────────────────────────────────────────────────

const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function WalletCard({
    name,
    balance,
    label = "Saldo tersedia",
    badge,
    icon,
    badgeColor = "blue",
}: WalletCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                        {icon ?? <StarIcon />}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{name}</span>
                </div>
                {badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]}`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Balance */}
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {formatRupiah(balance)}
            </p>
            <p className="text-xs text-gray-400">{label}</p>
        </div>
    );
}

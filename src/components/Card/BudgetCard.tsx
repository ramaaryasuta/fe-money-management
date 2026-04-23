import React from "react";

import { formatRupiah } from "../../utils/formatting";
import { badgeStyles } from "../../utils/ui_helper";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BudgetCardProps {
    name: string;
    spent: number;
    budget: number;
    badge?: string;
    icon?: React.ReactNode;
    badgeColor?: "blue" | "orange" | "green" | "gray";
    tags?: string[];
}

// ─── Default Icon ─────────────────────────────────────────────────────────────

const SpendingIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function BudgetCard({
    name,
    spent,
    budget,
    badge,
    icon,
    badgeColor = "orange",
    tags = [],
}: BudgetCardProps) {
    const percentage = Math.min(Math.round((spent / budget) * 100), 100);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                        {icon ?? <SpendingIcon />}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{name}</span>
                </div>
                {badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]} overflow-hidden text-ellipsis`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Spent amount */}
            <p className="text-2xl font-bold text-gray-900 mb-4">
                {formatRupiah(spent)}
            </p>

            {/* Progress bar */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                <span>Budget {formatRupiah(budget)}</span>
                <span>{percentage}% digunakan</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${percentage >= 90 ? "bg-red-400" : percentage >= 70 ? "bg-yellow-400" : "bg-blue-500"
                        }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Tags */}
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] text-gray-500 bg-gray-100 rounded-md px-2 py-0.5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

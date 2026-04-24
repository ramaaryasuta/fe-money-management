import React from "react";

import { formatRupiah } from "../../utils/formatting";
import { badgeStyles } from "../../utils/ui_helper";
import { Utensils } from "lucide-react";

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
        <div className="bg-white rounded-lg border border-gray-200 p-4 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                        {icon ?? <Utensils size={16} color={`${badgeColor}`} />}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{name}</span>
                </div>
                {badge && (
                    <span className={`text-xs font-normal px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]} overflow-hidden text-ellipsis`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Spent amount */}
            <p className="text-lg font-semibold text-gray-900 mb-4">
                {formatRupiah(spent)}
            </p>

            {/* Progress bar */}
            <div className="flex items-center justify-between text-xs text-gray-400 font-light mb-1.5">
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
                            className="text-[10px] text-gray-500 bg-gray-100 rounded-md px-2 py-0.5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

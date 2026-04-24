import React from "react";

import { formatRupiah } from "../../utils/formatting";
import { badgeStyles } from "../../utils/ui_helper";

import { Star } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WalletCardProps {
    name: string;
    balance: number;
    label?: string;
    badge?: string;
    icon?: React.ReactNode;
    badgeColor?: "blue" | "orange" | "green" | "gray";
}

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
        <div className="bg-white rounded-lg border border-gray-200 p-4 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl bg-orange-50  flex items-center justify-center flex-shrink-0`}>
                        {icon ?? <Star size={16} color={`${badgeColor}`} />}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{name}</span>
                </div>
                {badge && (
                    <span className={`text-xs font-normal px-2.5 py-1 rounded-full overflow-hidden text-ellipsis ${badgeStyles[badgeColor]}`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Balance */}
            <p className="text-lg font-semibold text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {formatRupiah(balance)}
            </p>
            <p className="text-xs font-extralight text-gray-400">{label}</p>
        </div>
    );
}

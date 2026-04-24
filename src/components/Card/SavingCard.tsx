import { formatRupiah } from "../../utils/formatting";
import { badgeStyles } from "../../utils/ui_helper";
import { PiggyBank } from "lucide-react";

export interface SavingCardProps {
    name: string;
    balance: number;
    target: number;
    badge?: string;
    icon?: React.ReactNode;
    badgeColor?: "blue" | "orange" | "green" | "gray";
}

const SavingCard = ({
    name,
    balance,
    target,
    badge,
    icon,
    badgeColor = "blue",
}: SavingCardProps) => {
    const percentage = Math.min(Math.round((balance / target) * 100), 100);

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        {icon ?? <PiggyBank size={16} color={`${badgeColor}`} />}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{name}</span>
                </div>
                {badge && (
                    <span className={`text-xs font-normal px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]} overflow-hidden text-ellipsis`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* balance amount */}
            <p className="text-lg font-semibold text-gray-900 mb-4">
                {formatRupiah(balance)}
            </p>

            {/* Progress bar */}
            <div className="flex items-center justify-between text-xs text-gray-400 font-light mb-1.5">
                <span>Budget {formatRupiah(target)}</span>
                <span>{percentage}% tercapai</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${percentage >= 90 ? "bg-green-500" : percentage >= 70 ? "bg-yellow-400" : "bg-red-400"
                        }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}

export default SavingCard
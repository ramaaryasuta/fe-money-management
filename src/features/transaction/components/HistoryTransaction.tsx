import { useState } from "react";
import { Pencil, Trash2, ArrowUpRight, ArrowDownLeft, ArrowLeftRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TransactionType = "expense" | "income" | "transfer";

export interface Transaction {
    id: string;
    title: string;
    category: string;
    date: string;
    amount: number;
    type: TransactionType;
    icon?: React.ReactNode;
}

export interface HistoryTransactionProps {
    transactions: Transaction[];
    onEdit?: (transaction: Transaction) => void;
    onDelete?: (transaction: Transaction) => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatRupiah = (amount: number): string =>
    "Rp " + Math.abs(amount).toLocaleString("id-ID");

// ─── Transaction Item ─────────────────────────────────────────────────────────

interface TransactionItemProps {
    transaction: Transaction;
    onEdit?: (t: Transaction) => void;
    onDelete?: (t: Transaction) => void;
}

function TransactionItem({ transaction, onEdit, onDelete }: TransactionItemProps) {
    const [hovered, setHovered] = useState(false);

    const { type, amount } = transaction;

    const amountColor =
        type === "income" ? "text-teal-500" :
            type === "expense" ? "text-red-400" :
                "text-gray-700";

    const amountPrefix =
        type === "income" ? "+" :
            type === "expense" ? "-" :
                "";

    const AmountIcon =
        type === "income" ? ArrowDownLeft :
            type === "expense" ? ArrowUpRight :
                ArrowLeftRight;

    const amountIconColor =
        type === "income" ? "text-teal-500" :
            type === "expense" ? "text-red-400" :
                "text-gray-400";

    return (
        <div
            className="flex items-center gap-4 px-5 py-4 group transition-colors duration-150 hover:bg-gray-50 rounded-xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Icon */}
            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                {transaction.icon ?? (
                    <span className="text-base">💳</span>
                )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{transaction.title}</p>
                <p className="text-xs text-gray-400 truncate">{transaction.category} · {transaction.date}</p>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 flex-shrink-0">
                {/* Edit & Delete — show on hover */}
                <div className={`flex items-center gap-1.5 transition-all duration-150 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {onEdit && (
                        <button
                            onClick={() => onEdit(transaction)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            <Pencil size={13} />
                        </button>
                    )}
                    {onDelete && (
                        <button
                            onClick={() => onDelete(transaction)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                            <Trash2 size={13} />
                        </button>
                    )}
                </div>

                {/* Amount */}
                <div className="flex items-center gap-1">
                    <AmountIcon size={13} className={amountIconColor} />
                    <span className={`text-sm font-semibold ${amountColor}`}>
                        {amountPrefix}{formatRupiah(amount)}
                    </span>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HistoryTransaction({
    transactions,
    onEdit,
    onDelete,
}: HistoryTransactionProps) {
    if (transactions.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-gray-100 px-5 py-10 text-center">
                <p className="text-sm text-gray-400">Belum ada transaksi</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 py-2 w-full">
            {transactions.map((t, i) => (
                <div key={t.id}>
                    <TransactionItem transaction={t} onEdit={onEdit} onDelete={onDelete} />
                    {i < transactions.length - 1 && (
                        <div className="mx-5 border-b border-gray-50" />
                    )}
                </div>
            ))}
        </div>
    );
}

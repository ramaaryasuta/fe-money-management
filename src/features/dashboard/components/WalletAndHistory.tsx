import { ArrowLeftRight, PiggyBank, Plane, Utensils, ArrowRight, Star } from "lucide-react";
import HistoryTransaction, { type Transaction } from "../../transaction/components/HistoryTransaction";
import WalletCard from "../../../components/Card/WalletCard";
import BudgetCard from "../../../components/Card/BudgetCard";
import SavingCard from "../../../components/Card/SavingCard";

const transactions: Transaction[] = [
    {
        id: "1",
        title: "jalan jalan ke korut",
        category: "Perjalanan",
        date: "1d lalu",
        amount: 1000000,
        type: "expense",
        icon: <Plane size={16} color="gray" />,
    },
    {
        id: "2",
        title: "Transfer antar kantong",
        category: "Kantong Utama → Makan & Minum",
        date: "13 Apr",
        amount: 300000,
        type: "transfer",
        icon: <ArrowLeftRight size={16} color="gray" />,
    },
    {
        id: "3",
        title: "Pemasukan ke kantong umroh",
        category: "Umroh",
        date: "13 Apr",
        amount: 14000000,
        type: "income",
        icon: <PiggyBank size={16} color="gray" />,
    },
    {
        id: "4",
        title: "Makan Nasi goreng",
        category: "Makan dan Minum",
        date: "10 Apr",
        amount: 18000,
        type: "expense",
        icon: <Utensils size={16} color="gray" />,
    },
];

const WalletAndHistory = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6">

            {/* Dompet */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-gray-400 text-xs tracking-widest uppercase">Kantong</p>
                    <a href="/dompet">
                        <div className="flex items-center gap-1 text-gray-400 text-xs hover:text-gray-600 transition-colors">
                            <p>Lihat semua</p>
                            <ArrowRight size={13} />
                        </div>
                    </a>
                </div>
                {/* Scrollable horizontal di mobile, grid di desktop */}
                <div className="flex lg:grid lg:grid-cols-2 gap-3 overflow-x-auto scrollbar-hide pb-1">
                    <div className="w-80 lg:w-auto flex-shrink-0 lg:flex-shrink">
                        <WalletCard name="Saldo Utama" balance={2100340} icon={<Star size={16} />} badge="utama" />
                    </div>
                    <div className="w-80 lg:w-auto flex-shrink-0 lg:flex-shrink">
                        <BudgetCard name="Makan dan Minum" spent={284000} budget={345000} badge="Pengeluaran" tags={['Makan', 'Minum', 'Bakar']} showTags={false} />
                    </div>
                    <div className="w-80 lg:w-auto flex-shrink-0 lg:flex-shrink">
                        <SavingCard name="Yamaha XSR 155" balance={1400000} target={10000000} badge="tabungan" />
                    </div>
                </div>
            </div>

            {/* History */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-gray-400 text-xs tracking-widest uppercase">Riwayat</p>
                    <a href="/transaksi">
                        <div className="flex items-center gap-1 text-gray-400 text-xs hover:text-gray-600 transition-colors">
                            <p>Lihat semua</p>
                            <ArrowRight size={13} />
                        </div>
                    </a>
                </div>
                <HistoryTransaction
                    transactions={transactions}
                    onEdit={(t) => console.log("edit", t)}
                    onDelete={(t) => console.log("delete", t)}
                />
            </div>

        </div>
    );
};

export default WalletAndHistory;
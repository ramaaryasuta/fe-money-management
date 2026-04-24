import SmartInputField from "../../../components/Field/SmartInputField"
import HistoryTransaction, { type Transaction } from "../components/HistoryTransaction"
import { PiggyBank, Utensils, ArrowLeftRight, Plane } from "lucide-react";

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

const TransactionPage = () => {
    return (
        <div className="p-4 space-y-4">
            <SmartInputField
                onSubmit={(value) => console.log("Input:", value)}
                placeholder="Beli kopi 20k, bayar listik 500rb..."
            />
            <HistoryTransaction
                transactions={transactions}
                onEdit={(t) => console.log("edit", t)}
                onDelete={(t) => console.log("delete", t)}
            />
        </div>
    )
}

export default TransactionPage
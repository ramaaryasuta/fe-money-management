import WalletBaseCard from "../../../components/Card/WalletBaseCard"

import { PiggyBank, MoveDownLeft } from "lucide-react"

const WalletSummary = () => {
    return (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                <WalletBaseCard title="Saldo Utama" value={2100340} />
            </div>
            <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                <WalletBaseCard
                    icon={<PiggyBank size={16} color="gray" />}
                    title="Total Pengeluaran" value={203500} />
            </div>
            <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                <WalletBaseCard
                    icon={<MoveDownLeft size={16} color="gray" />}
                    title="Total Tabungan" value={1450000} />
            </div>
        </div>
    )
}

export default WalletSummary
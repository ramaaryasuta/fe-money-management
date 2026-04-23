import SavingCard from "../../../components/Card/SavingCard"

const SavingWallet = () => {
    return (
        <div>
            <h1 className="text-md text-gray-400 font-medium mb-4">Dompet Tabungan</h1>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                    <SavingCard name="Yamaha XSR 155" balance={1400000} target={10000000} badge="tabungan" />
                </div>
            </div>
        </div>
    )
}

export default SavingWallet
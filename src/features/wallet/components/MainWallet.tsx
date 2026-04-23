import WalletCard from "../../../components/Card/WalletCard"

const MainWallet = () => {
    return (
        <div>
            <h1 className="text-md text-gray-400 font-medium mb-4">Dompet Utama</h1>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                <div className="w-8/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                    <WalletCard name="Mezink" balance={2340050} badge="utama" />
                </div>
                <div className="w-8/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                    <WalletCard name="Sumopod" balance={326000} badge="Freelance" badgeColor="green" />
                </div>
            </div>
        </div>
    )
}

export default MainWallet
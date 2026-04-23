import BudgetWallet from "../components/BudgetWallet";
import MainWallet from "../components/MainWallet";
import SavingWallet from "../components/SavingWallet";

const WalletPage = () => {
    return (
        <div className="px-6 py-6 space-y-6">
            <MainWallet />
            <BudgetWallet />
            <SavingWallet />
        </div>
    )
};

export default WalletPage
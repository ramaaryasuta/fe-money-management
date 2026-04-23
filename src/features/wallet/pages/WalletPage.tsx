import BudgetWallet from "../components/BudgetWallet";
import MainWallet from "../components/MainWallet";

const WalletPage = () => {
    return (
        <div className="px-6 py-6 space-y-6">
            <MainWallet />
            <BudgetWallet />
        </div>
    )
};

export default WalletPage
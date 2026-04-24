import SmartInputField from "../../../components/Field/SmartInputField"
import WalletSummary from "../components/WalletSummary"

const DashboardPage = () => {
    return (
        <div className="p-4 space-y-4">
            <WalletSummary />
            <SmartInputField
                onSubmit={(value) => console.log("Input:", value)}
                placeholder="Beli kopi 20k, bayar listik 500rb..." />
        </div>
    )
}

export default DashboardPage
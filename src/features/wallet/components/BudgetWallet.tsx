import BudgetCard from "../../../components/Card/BudgetCard"

const BudgetWallet = () => {
    return (
        <div>
            <h1 className="text-sm text-gray-400 font-medium mb-4">Budget Pengeluaran (3)</h1>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                    <BudgetCard name="Makan dan Minum" spent={284000} budget={345000} badge="Pengeluaran" tags={['Makan', 'Minum', 'Bakar']} />
                </div>
                <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                    <BudgetCard name="Traveling" spent={870000} budget={2500000} badge="Pengeluaran" />
                </div>
                <div className="w-10/12 md:w-6/12 lg:w-4/12 flex-shrink-0">
                    <BudgetCard name="Entertaiment" spent={20000} budget={150000} badge="Pengeluaran" tags={['Strava', 'Gaming']} />
                </div>
            </div>
        </div>
    )
}

export default BudgetWallet
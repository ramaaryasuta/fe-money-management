import { formatRupiah } from "../../utils/formatting";
import { Star } from "lucide-react"

export interface WalletBaseProps {
    title: string;
    value: number;
    icon?: React.ReactNode;
}

const WalletBaseCard = ({
    title,
    value,
    icon,
}: WalletBaseProps) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 w-full">
            {/* Header */}
            <div className="flex mb-2">
                <div className="flex items-center gap-2.5">
                    {icon ?? <Star size={16} color="gray" />}
                    <span className="text-sm font-normal text-gray-400">{title}</span>
                </div>
            </div>

            {/* Balance Value */}
            <p className="text-xl font-semibold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                {formatRupiah(value)}
            </p>
        </div>
    )
}

export default WalletBaseCard
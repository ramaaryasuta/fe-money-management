import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Navigation, type NavItem, DashboardIcon, WalletIcon, TransactionIcon, SettingsIcon } from "./Navigation";

const navItems: NavItem[] = [
    { id: "/", label: "Dashboard", mobileLabel: "Home", icon: <DashboardIcon /> },
    { id: "/dompet", label: "Dompet", mobileLabel: "Dompet", icon: <WalletIcon /> },
    { id: "/transaksi", label: "Transaksi", mobileLabel: "Riwayat", icon: <TransactionIcon /> },
    { id: "/pengaturan", label: "Pengaturan", mobileLabel: "Setting", icon: <SettingsIcon /> },
];

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Navigation
            navItems={navItems}
            activeId={location.pathname}
            onNavigate={(path) => navigate(path)}
            appName="Duit"
            user={{ name: "Pengguna", initials: "P" }}
        >
            <Outlet />
        </Navigation>
    );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import WalletPage from "./features/wallet/pages/WalletPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "dompet", element: <WalletPage /> },
      { path: "transaksi", element: <DashboardPage /> },
      { path: "pengaturan", element: <DashboardPage /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
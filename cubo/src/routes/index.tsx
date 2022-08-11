import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}
export default AppRoutes;
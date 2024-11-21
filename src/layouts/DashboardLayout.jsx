import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="grid md:grid-cols-12">
            <div className="md:col-span-3">
                <Sidebar/>
            </div>
            <div className="md:col-span-9">
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;
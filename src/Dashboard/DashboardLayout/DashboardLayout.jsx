import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function DashboardLayout() {
    return (
        <div className="flex gap-x-2">
            <div className="w-3/12">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full bg-green-400">
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
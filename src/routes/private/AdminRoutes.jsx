import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Loading from "../../pages/Loading";

const AdminRoutes = ({children}) => {
    const userData=useUserData()
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading || !userData.role){
        return <Loading/>
    }
    if(user && userData.role==='admin'){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default AdminRoutes;
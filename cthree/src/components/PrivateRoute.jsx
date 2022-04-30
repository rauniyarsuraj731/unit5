import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to = "/login"/>
    }
    return children;
};
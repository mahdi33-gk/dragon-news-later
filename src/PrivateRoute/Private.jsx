import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Components/Loading";

const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const navigate =useNavigate();

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }
    
    return (
        
        <Navigate to={'/auth/login'}></Navigate>
        
    );
};

export default Private;
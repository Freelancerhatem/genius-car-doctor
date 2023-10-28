import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const{loading} = useContext(AuthContext);
    if(loading){
        return 'loading'
    }
    else{
        return children
    }
    
};

export default PrivateRoute;
import { use, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const [user,loading] = use(AuthContext)
    // const location = useLocation()
    if(loading){
        return <div>Loading.......</div>
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }
    return children

}
export default PrivateRoutes;
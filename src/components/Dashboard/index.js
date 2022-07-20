import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {
    /* eslint-disable */
    const [user, setUser] = useState(null);
    const auth = getAuth();
    /* eslint-enable */

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);


    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;
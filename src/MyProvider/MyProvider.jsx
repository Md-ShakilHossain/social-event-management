import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const DataContext = createContext();

const MyProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const data ={

        user,
        createUser

    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

MyProvider.propTypes = {
    children: PropTypes.node
}

export default MyProvider;
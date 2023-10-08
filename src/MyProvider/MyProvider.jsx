import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const DataContext = createContext();

const MyProvider = ({children}) => {

    const [user, setUser] = useState('Abdur Rahim');

    const data ={

        user

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
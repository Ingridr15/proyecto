import React, { useState, createContext, useEffect } from 'react';
import { database } from '../../Settings/ConfigFirebase';
import { onValue, ref, off } from 'firebase/database';

export const FirebaseContext = createContext();

const FirebaseProvider = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const databaseRef = ref(database, 'Vuelos');

        onValue(databaseRef, (snapshot) => {
            const tableData = snapshot.val();
            const dataArray = tableData ? Object.values(tableData) : [];
            setData(dataArray);
        });

        return () => {
            off(databaseRef);
        };
    }, []);

    return (
        <FirebaseContext.Provider value={{ data }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
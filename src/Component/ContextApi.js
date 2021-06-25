import React, { createContext, useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import Reducer from './Reducer';

export const ContextProvider = createContext()

function ContextApi({ children }) {

    const [state, dispatch] = useReducer(Reducer)
    const apiKey = process.env.REACT_APP_API_KEY

    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
            adults1: '1',
            pageNumber: '1',
            destinationId: '169712',
            pageSize: '25',
            checkOut: '2021-06-25',
            checkIn: '2021-06-24',
            sortOrder: 'BEST_SELLER',
            locale: 'en_US',
            currency:'CAD'
        },
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'hotels4.p.rapidapi.com'
        }
    };



    useEffect(() => {

        axios.request(options).then(function (response) {
            console.log(response.data);
            console.log(response.data.data.body.searchResults.results);
            dispatch({ type: "default", payload: response.data.data.body.searchResults.results })
        }).catch(function (error) {
            console.error(error);
        });

    }, [])



    return (
        <>
            {/* {state && ( */}
            <ContextProvider.Provider value={{ state, dispatch }}>
                {children}
            </ContextProvider.Provider>
            {/* )} */}
        </>
    )
}

export default ContextApi


    // const fetchApi = async () => {

    //     try {
    //         const apiKey = process.env.REACT_APP_API_KEY
    //         // const res = await axios.get(`https://www.zillow.com/webservice/ProReviews.htm?zws-id=${apiKey}&email=kit486759@gmail.com`)
    //         const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    //         const data = await res.data.slice(0, 19)


    //         dispatch({ type: "default", payload: data })
    //         console.log(data)
    //     }
    //     catch (err) {
    //         console.log(`There is an error ${err}`)
    //     }
    // }
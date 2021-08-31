import React, { useState, useEffect } from 'react'
import yelp from '../Api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async (getTerm) => {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: getTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('')
        } catch (e) {
            setErrorMessage('Somthing wents worng!')
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}
import React,{ useState, useEffect } from 'react';
import {Typography, NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
            // const data = await countries();
            // console.log(data)
        }
        fetchAPI();
    }, [setFetchedCountries])
    // console.log(fetchedCountries);

 return(
     <>
        <Typography 
            className={styles.pickerHeader}
            variant="h5"
            color="textSecondary"
         >Select a Country To View Status</Typography>
     <FormControl className={styles.formControl}>
         
         <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
             <option value="">Global</option>
             {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
         </NativeSelect>
          
     </FormControl>
     
     </>
     
); 
}


export default CountryPicker;   
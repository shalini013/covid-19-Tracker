import React, {useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import Style from './CountryPicker.module.css';

import {fetchCountries} from '../../api';


function CountryPicker({handleCountry}) {

    const [fetchedCountries,setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi = async()=>{
            setFetchedCountries(await fetchCountries())
        }
        
        fetchApi();
    },[setFetchedCountries])
    console.log(fetchedCountries)
    return (
        <FormControl className={Style.FormControl}>
            <NativeSelect onChange={(e)=> handleCountry(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country,index)=> <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;

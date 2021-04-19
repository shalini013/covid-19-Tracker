import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
// const url_daily = 'https://covid19.mathdro.id/api/daily';

export const  fetchData = async (country) => {
    let changeableURL = url;
    if(country){
        changeableURL = `${url}/countries/${country}`
    }
    try {
        const {data :  {confirmed,deaths,recovered,lastUpdate}} = await axios.get(changeableURL)
        const modifyData = {confirmed, deaths, recovered, lastUpdate} 
        return modifyData;
    } catch (error) {
        console.log('error:',error)
        
    }

}

export const fetchDailyData = async() =>{
    try {
        // const response = await axios.get(`${url}/daily`)
        const {data} = await axios.get(`${url}/daily`)
        // console.log(data)
        const modifyData = data.map((dailyData) =>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifyData;
        
        
    } catch (error) {
        console.log('error:',error)
        
    }
}

export const fetchCountries = async()=>{
    try {
        const {data :{countries}} = await axios.get(`${url}/countries`)
         return countries.map((country)=> country.name)
        
    } catch (error) {
        console.log('error:',error)
    }
}
import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line,Bar } from 'react-chartjs-2';

import Style from './Charts.module.css';


function Charts({country,data :{confirmed, recovered, deaths}}) {

    /* let dailyState = {} */


    const [dailyData, setDailyData] = useState([])

    /* useEffect(() => {
       async function fetchApi(){
           const data = await fetchDailyData()
           setDailyData(data)
       } 
       fetchApi();
    }) */
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData)
        fetchApi()
    },[])

    const lineChart = (
        dailyData.length  ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true

                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        borderColor: 'red',
                        fill: true


                    }]
                }}
            />) : null
            )
        const barChart =(
            confirmed ?
           ( <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:['rgba(0, 0, 255, 0.5)',
                    'rgba(0, 225, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)'],
                    data:[confirmed.value, recovered.value, deaths.value]
                    
                }]

            }}
            /* options={{
                legend:{display:false},
                title:{display:true, text:`current state in ${country}`}
            }} */
           />): null
        )
    return (
        <div className={Style.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;

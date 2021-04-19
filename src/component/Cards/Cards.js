import React from 'react'
import {Grid,CardContent,Typography,Card} from '@material-ui/core';
import Style from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

function Cards(props) {
    console.log(props)
    const {data: {confirmed, deaths, recovered,lastUpdate}} = props;
    if(!props.data.confirmed){
        return 'loading....';
    }
    return (
        <div className={Style.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item  component={Card} xs={12} md={3}  className={cx(Style.card, Style.infected)}>
                    <CardContent >
                    <Typography color='textSecondary' gutterBottom>
                        <CountUp start={0} end={confirmed.value} separator=',' duration={2.5} />
                        </Typography>
                    <Typography variant='h5'>Real Data</Typography>
                    <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>No Of Active COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item  component={Card} xs={12} md={3}   className={cx(Style.card,Style.recovered)}>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                        <CountUp start={0} end={recovered.value} separator=',' duration={2.5} />
                        </Typography>
                    <Typography variant='h5'>Real Data</Typography>
                    <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>No Of Recoveries From COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item  component={Card} xs={12} md={3}  className={cx(Style.card,Style.deaths)}>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                    <CountUp start={0} end={deaths.value} separator=',' duration={2.5} />
                    </Typography>
                    <Typography variant='h5'>Real Data</Typography>
                    <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Total No Of Death Caused By COVID-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;

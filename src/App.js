import React, { Component } from 'react';
import {Charts, Cards, CountryPicker} from './component';
import style from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'

 class App extends Component {

  state = {
    data:{},
    country:''
  }
 async componentDidMount(){
   const data = await fetchData();
   this.setState({data:data})
   console.log(data)
  }

  handleCountry =async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country})
  }
  render() {
    const {data,country} = this.state
    return (
      <div className={style.container}>
        <img src={coronaImage} className={style.image} alt='COVID-19'/>
        <Cards data={data} />
        <CountryPicker handleCountry={this.handleCountry}/>
        <Charts  data={data}  country={country}/>
      </div>
    )
  }
}

export default App

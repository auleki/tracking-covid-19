import React from 'react';
import {  Cards, Chart, CountryPicker  } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import headerImage from './images/covid19.png';


class App extends React.Component {

     state = {
         data: {},
         country: ''
     }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
        // console.log(data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        this.setState({ data: fetchedData, country: country })
    }


    render () {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={headerImage} alt="Covid 19 header" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
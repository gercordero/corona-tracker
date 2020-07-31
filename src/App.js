import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import { AppContainer, GlobalStyle } from "./App.styles";
import coronaImage from "./images/covid-19.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const chosenCountryData = await fetchData(country);
    this.setState({ data: chosenCountryData, country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <AppContainer>
        <GlobalStyle />
        <img src={coronaImage} alt="Corona Virus Logo" />
        <Cards data={data} />
        <CountryPicker onCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </AppContainer>
    );
  }
}

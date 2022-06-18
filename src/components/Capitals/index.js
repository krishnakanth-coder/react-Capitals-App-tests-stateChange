import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: 'India'}

  onChangeCaptial = event => {
    const selectedCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    console.log(selectedCountry[0])
    console.log(selectedCountry[0].country)
    this.setState({country: selectedCountry[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="container">
        <div className="countries-and-capitals">
          <h1 className="header">Countries And Capitals</h1>
          <div className="select-container">
            <select onChange={this.onChangeCaptial}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para-text">is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals

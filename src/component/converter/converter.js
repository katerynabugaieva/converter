import React from "react";
import axios from "axios";
import "./converter.css";
import InputNumber from 'react-input-number';
import Button from '@material-ui/core/Button';
import Result from "../Result/Result";

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          result: null,
          fromCurrency: "USD",
          toCurrency: "GBP",
          count: 1,
          currencies: []
        };
      }
      
      componentDidMount() {
        axios
        .get('https://api.exchangeratesapi.io/latest')
        .then(response => {
            const currencyArray = ["EUR"];
            for (const key in response.data.rates) {
              currencyArray.push(key);
            }
            this.setState({ currencies: currencyArray });
          })
          .catch(err => {
            console.log("something goes wrong", err);
          });
      }
      
      selectHandler = event => {
        if (event.target.name === "from") {
          this.setState({ fromCurrency: event.target.value });
        } else {
          if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value });
          }
        }
      };
      convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
          axios
            .get(
              `https://api.exchangeratesapi.io/latest?base=${
                this.state.fromCurrency
              }&symbols=${this.state.toCurrency}`
            )
            .then(response => {
              const result =
                this.state.count * response.data.rates[this.state.toCurrency];
              this.setState({ result: result.toFixed(5) });
            })
            .catch(error => {
              console.log("something goes wrong", error.message);
            });
        } else {
          this.setState({ result: "You cannot convert the same currency!" });
        }
      };

render() {
    return (
      <div className="Converter">
        <div className='Form'>
          <div className="From">
            <InputNumber 
              className='inputForm'
              min={0}
              value={this.state.count}
              onChange={event =>  this.setState({ count: event })}
            />

            <select
              name="from"
              onChange={event => this.selectHandler(event)}
              value={this.state.fromCurrency}
            >
              {this.state.currencies.map(currency => (
                <option key={currency}>{currency}</option>
              ))}
            </select>
            <select
              name="to"
              onChange={event => this.selectHandler(event)}
              value={this.state.toCurrency}
            >
              {this.state.currencies.map(currency => (
                <option key={currency}>{currency}</option>
              ))}
            </select>
          
          <Button onClick={this.convertHandler}>Convert </Button>
        {this.state.result &&  
        <Result value={this.state.result}/> }
        </div>
      </div>
      </div>
    );
  }
}
export default Converter;
/**
 * 状态提升 -- 将共享的状态提升到最静的父组件中去， 
 * 在这个例子中 ，celsius 和 fahrenheit 的内容都是两个输入框，那么就可以把输入框封装为一个子组件
 */

import React from 'react';

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>the water would not boil.</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 /5) + 32; 
}

function tryConvert(temperature,convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) /1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }
  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend> 
          Enter temperature in {scaleNames[scale]} 
        </legend>
        <input value={temperature} onChange={this.handleChange}/>

      </fieldset>
    )
  }
}

class TemperatureCalculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature:'',
      scale:'c',
    };
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
  }
  handleCelsiusChange(temperature) {
    this.setState(
      {scale:'c',temperature}
    )
  }
  handleFahrenheitChange(temperature) {
    this.setState(
      {scale:'f',temperature}
    )
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
    return (
     <div>
       <TemperatureInput scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
       <TemperatureInput scale='f'
          temperature={fahrenheit} 
          onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
     </div>
    )
  }
}

export default TemperatureCalculator;
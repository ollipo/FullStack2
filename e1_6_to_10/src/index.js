import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      huonoArvo: 0
    }
    
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      huonoArvo: this.state.huonoArvo - 1
    })
  }

  render() {
    
    const naytaStatistiikka = () => {
      if (this.state.hyva === 0 && this.state.neutraali === 0 && this.state.huono === 0) {
        return (
          <div>ei yhtään palautetta annettu</div>
        )
      } else {
        return (
        <table>
          <Statistic
          arvo = {this.state.hyva}
          teksti="hyvä"
          />
          <Statistic
            arvo = {this.state.neutraali}
            teksti="neutraali"
          />
          <Statistic
            arvo = {this.state.huono}
            teksti="huono"
          />
          <Statistic
            arvo = {((this.state.hyva + this.state.huonoArvo) / (this.state.hyva +
              this.state.neutraali + this.state.huono)).toFixed(1)}
            teksti="keskiarvo"
          />
          <Statistic
            arvo = {(this.state.hyva / (this.state.hyva +
              this.state.neutraali + this.state.huono) * 100).toFixed(1)}
            teksti="positiiviset"
          />
          </table>
        )
      }
    }
    
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <Button
            handleClick={this.klikHyva}
            text="hyvä"
          />
          <Button
            handleClick={this.klikNeutraali}
            text="neutraali"
          />
          <Button
            handleClick={this.klikHuono}
            text="huono"
          />
        </div>
        <h1>statistiikka</h1>
        {naytaStatistiikka()}
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  return (
  <tbody>
    <tr>
      <td>{props.teksti}</td>
      <td>{props.arvo}</td>
    </tr>
  </tbody>
  )
}
const Statistic = (props) => {
  return (
    <Statistics 
      arvo = {props.arvo}
      teksti = {props.teksti}/>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)


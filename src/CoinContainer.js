import React, { Component } from 'react'
import choice from './helpers'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: "http://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            currentCoin: null,
            numberFlips: 0,
            numberHeads: 0,
            numberTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin()  {
        const newCoin = choice(this.state.coins)
        this.setState(st => {
            return {

                currentCoin: newCoin,
                numberFlips: st.numberFlips + 1
            }
        })
    }

    handleClick = (e) => {
        this.flipCoin();
    }

    render(){
        return(
            <div className="CoinContainer">
                <h2>Flip a Coin!</h2>
                <button onClick={this.handleClick}>FlipMe</button>
                <p>Out of {this.state.numberFlips} flips, there have been {this.state.numberHeads}{" "} heads and {this.state.numberTails} tails </p>
            </div>
        )
    }

}

export default CoinContainer;
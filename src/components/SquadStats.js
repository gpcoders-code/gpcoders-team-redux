import React, { Component } from 'react'
import { connect } from 'react-redux'

class SquadStats extends Component {

    strength() {
        let strength = 0;
        this.props.heros.forEach(hero => strength += hero.strength)
        return strength
    }

    intelligence() {
        let intelligence = 0;
        this.props.heros.forEach(hero => intelligence += hero.intelligence)
        return intelligence
    }

    speed() {
        let overAllspeed = 0;
        this.props.heros.forEach(hero => overAllspeed += hero.speed)
        return overAllspeed
    }

    render() {
        return(
            <div>
                <h4>Team Stats</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Overall Strength: </b> {this.strength()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Intelligence: </b> {this.intelligence()}
                    </li>
                    <li className="list-group-item">
                        <b>Overall Speed: </b> {this.speed()}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    heros: state.heros
})

export default connect(mapStateToProps, null)(SquadStats)
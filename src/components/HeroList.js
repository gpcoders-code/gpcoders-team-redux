import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeCharacterByid } from '../actions';

class HeroList extends Component {
    render() {
        return(
            <div>
                <h4>Your Team Member: </h4>
                <ul className="list-group">
                    {
                        this.props.heros.map((hero) => {
                            return(
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">{hero.name}</div>
                                    <div className="list-item right-button"
                                        onClick={() => this.props.removeCharacterByid(hero.id)}
                                    >x</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    heros: state.heros
})

export default connect(mapStateToProps, { removeCharacterByid })(HeroList);
import React, { Component } from 'react';
import CharactersList from './CharactersList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css';

class App extends Component {
    render() {
        return(
            <div className="App">
                <h2>GpCoder's Super Team</h2>
                <div className="col-md-4">
                    <CharactersList />
                </div>
                <div className="col-md-4">
                    <HeroList />
                </div>
                <div className="col-md-4">
                    <SquadStats />
                </div>
            </div>
        )
    }
}

export default App
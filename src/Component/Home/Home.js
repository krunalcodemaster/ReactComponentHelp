import React, { Component } from 'react'
import HomeView from './HomeView';
import './Home.css'


class Home extends Component {
    state = {
        toggleClassState: true,
        addRemoveClassState: true,
    };

    // toggle class
    toggleClassFunction = () => {
        this.setState({ toggleClassState: !this.state.toggleClassState });
    };
    // toggle class

    addRemoveClassFunction = (classStatus) => {
        this.setState({
            addRemoveClassState: classStatus
        });
    }
 
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <HomeView 
                    toggleClassFunction={this.toggleClassFunction} toggleClassState={this.state.toggleClassState} 
                    addRemoveClassFunction={this.addRemoveClassFunction} addRemoveClassState={this.state.addRemoveClassState}
                    ></HomeView>
                </div>
            </div>
        )
    }
}

export default Home
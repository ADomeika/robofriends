import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return isPending ? (
      <h1 className='tc'>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = ({ searchRobots, requestRobots }) => ({
  searchField: searchRobots.searchField,
  robots: requestRobots.robots,
  isPending: requestRobots.isPending,
  error: requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

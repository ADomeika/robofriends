import React, { Component } from 'react';

import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();

      this.setState({ robots: users });
    } catch (error) {
      console.error(error);
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return !robots.length ? (
      <h1 className='tc'>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;

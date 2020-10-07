import React, { Component } from 'react';

import './MainPage.css';
import CardList from './CardList';
import Header from './Header';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ? (
      <h1 className='tc'>Loading...</h1>
    ) : (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;

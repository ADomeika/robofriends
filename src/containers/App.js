import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
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

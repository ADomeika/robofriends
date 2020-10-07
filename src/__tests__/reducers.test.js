import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from '../constants';
import * as reducers from '../reducers';

describe('searchRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(undefined, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'test',
      })
    ).toEqual({ searchField: 'test' });
  });
});

describe('requestRobots', () => {
  const initialState = {
    robots: [],
    error: '',
    isPending: false,
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(initialState, {})).toEqual(initialState);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ ...initialState, isPending: true });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    const robots = [{ id: 1, name: 'test', email: 'test@test.com' }];
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: robots,
      })
    ).toEqual({ ...initialState, robots });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    const error = 'Error occurred';
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: error,
      })
    ).toEqual({ ...initialState, error });
  });
});

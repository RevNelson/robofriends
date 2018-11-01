import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants.js'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


describe('search field tests', () => {

  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }

  it('should create an action to search robots', () => {
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})


describe('request robots tests', () => {



  it('handles requesting robots API', () => {
    const mockStore = configureMockStore([thunk])
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions()[0];

    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action).toEqual(expectedAction)
  })

  const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

  it('fetches and gets a successful response', () => {
    const expectedAction = REQUEST_ROBOTS_SUCCESS

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, `{"type":"${expectedAction}"}`)));
    const mockStore = configureMockStore([thunk])
    const store = mockStore();


    return store.dispatch(actions.requestRobots())
    .then(() => {
      const action = store.getActions();
      expect(action[1].type).toEqual(expectedAction)
    })
  })

  it('fetches and gets a failed response', () => {
    const expectedAction = REQUEST_ROBOTS_FAILED

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, 'Test' +
      ' Error', '{"status":400, "statusText": Test Error!}')));
    const mockStore = configureMockStore([thunk])
    const store = mockStore();


    return store.dispatch(actions.requestRobots())
    .then(() => {
      const action = store.getActions();
      expect(action[1].type).toEqual(expectedAction)
    })
  })
})
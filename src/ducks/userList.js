import { createReducer } from 'redux-act'
import * as app from './app'
import { message } from 'antd'
import callApi from 'ducks/apiCaller'

export const getUser = () => (
    dispatch: Function,
    getState: Function,
) => {
    callApi('users', 'GET', null).then(res => {
        dispatch(app.fetchAllUsers(res.data));
    });
    // dispatch(app.fetchAllUsers('users'))
}

const initialState = {}
export default createReducer({}, initialState)


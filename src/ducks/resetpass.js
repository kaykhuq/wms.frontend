import { createReducer } from 'redux-act'
import * as app from './app'
import { message } from 'antd'

export const REDUCER = 'resetpass'

export const submit = ({ email }: { email: string}) => (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(app.addSubmitForm(REDUCER))

  let isReseted = app.resetpass(email, dispatch)

  if (isReseted) {
    dispatch(app.deleteSubmitForm(REDUCER))
  } else {
    dispatch(app.deleteSubmitForm(REDUCER))
    message.error('Invalid email')
  }
}

const initialState = {}
export default createReducer({}, initialState)

import * as types from './constants';
// import callApi from './apiCaller';

// export const actFetchUserRequest = () => {
//     return (dispatch) => {
//         return callApi('users', 'GET', null).then(res => {
//             dispatch(actFetchUser(res.data));
//         })
//     }
// }

export const actFetchUser = (users) => {
    return {
        type : types.FETCH_ALL_USER,
        users
    }
}
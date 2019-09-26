import axiosWithAuth from '../../utils/axiosWithAuth';

export const FETCH_TICKETS_START = 'FETCH_TICKETS_START';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAIL = 'FETCH_TICKETS_FAIL';

export const fetchTickets = () => dispatch => {
    dispatch({ type: FETCH_TICKETS_START });
    axiosWithAuth().get('/tickets')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const FETCH_SINGLE_TICKET_START = 'FETCH_SINGLE_TICKET_START';
export const FETCH_SINGLE_TICKET_SUCCESS = 'FETCH_SINGLE_TICKET_SUCCESS';
export const FETCH_SINGLE_TICKET_FAIL = 'FETCH_SINGLE_TICKET_FAIL';

export const fetchSingleTickets = () => dispatch => {
    dispatch({ type: FETCH_SINGLE_TICKET_START });
    axiosWithAuth().get('url')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const POST_TICKET_START = 'POST_TICKET_START';
export const POST_TICKET_SUCCESS = 'POST_TICKET_SUCCESS';
export const POST_TICKET_FAIL = 'POST_TICKET_FAIL';

export const postTicket = (ticket) => dispatch => {
    dispatch({ type: POST_TICKET_START });
    axiosWithAuth().post('url', ticket)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const PUT_TICKET_START = 'PUT_TICKET_START';
export const PUT_TICKET_SUCCESS = 'PUT_TICKET_SUCCESS';
export const PUT_TICKET_FAIL = 'PUT_TICKET_FAIL';

export const putTicket = (ticket) => dispatch => {
    dispatch({ type: PUT_TICKET_START });
    axiosWithAuth().post(`url/${ticket.id}`, ticket)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const SET_USER_TYPE = 'SET_USER_TYPE'

export const setUserType = (userType) => {
    return {
        type: SET_USER_TYPE,
        payload: userType
    }
}
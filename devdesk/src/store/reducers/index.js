import {
    FETCH_TICKETS_START, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAIL,
    PUT_TICKET_START, POST_TICKET_START, POST_TICKET_SUCCESS, POST_TICKET_FAIL,
    PUT_TICKET_SUCCESS, PUT_TICKET_FAIL
} from '../actions'

const initialState = {
    userType: '',
    user: '',
    ticketArray: '',
    getError: '',
    postError: '',
    putError: '',
    isGetting: false,
    isPosting: false,
    isPutting: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TICKETS_START:
            return {
                ...state,
                isGetting: true,
                getError: '',
            };
        case FETCH_TICKETS_SUCCESS:
            return {
                ...state,
                isGetting: false,
                ticketArray: ,
                userType: ,
                user: ,
            };
        case FETCH_TICKETS_FAIL:
            return {
                ...state,
                isGetting: false,
                getError: action.payload,
            };
        case POST_TICKET_START:
            return {
                ...state,
                isPosting: true,
                postError: '',
            };
        case POST_TICKET_SUCCESS:
            return {
                ...state,
                isPosting: false,
                ticketArray: ,
            };
        case POST_TICKET_FAIL:
            return {
                ...state,
                isPosting: false,
                postError: action.payload,
            };
        case PUT_TICKET_START:
            return {
                ...state,
                isPutting: true,
                putError: '',
            };
        case PUT_TICKET_SUCCESS:
            return {
                ...state,
                isPutting: false,
                ticketArray: ,
            };
        case PUT_TICKET_FAIL:
            return {
                ...state,
                isPutting: false,
                putError: action.payload,
            };
        default:
            return state
    }
}
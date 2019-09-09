export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const loginAction = {
    type: LOG_IN,
}

export const login = () => {
    return {
        type: LOG_IN
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}

const initialState = {
    isLoggedin: false,
    testNick: 'keen'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedin: true
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedin: false
            }
        default: {
            return {
                ...state
            }
        }
    }
}
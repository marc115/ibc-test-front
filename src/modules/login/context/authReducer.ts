import { AuthAction, AuthState } from "./AuthContext";

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'login':
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        
        case 'logout':
            return {
                ...state,
                logged: false,
                user: undefined
            }
    
        default:
            return state;
    }

}
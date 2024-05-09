import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { AuthContext, AuthState, LoginAction, LogoutAction, initialState } from "./AuthContext";
import { authLogin } from "../helpers/login";
import { mapErrorMessage } from "../../../util/map-error-message";

const init = (): AuthState => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return {
        logged: !!user,
        user: user
    }
}

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = async (email: string, password: string): Promise<boolean> => {
        const { user, status } = await authLogin(email, password);
        if (user) {
            const action: LoginAction = { type: 'login', payload: user }
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(action)
            return true;
        } else {
            const errorMessage = mapErrorMessage(status)
            //TODO: show snackbar saying that login failed
            return false;
        }
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action: LogoutAction = { type: 'logout' };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            state: authState,
            dispatch: dispatch,

            //Methods
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
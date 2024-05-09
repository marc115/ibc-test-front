import { createContext } from 'react';
import { User } from '../models/User';

export interface AuthState {
    logged: boolean,
    user?: User,
}

export interface LoginAction {
    type: 'login'
    payload: User
}

export interface LogoutAction {
    type: 'logout',
}

export type AuthAction = LoginAction | LogoutAction

export const initialState: AuthState = { logged: false, user: undefined }

export const AuthContext = createContext<{
    state: AuthState,
    dispatch: React.Dispatch<AuthAction>,
    login: (email: string, password: string) => Promise<boolean>,
    logout: () => void,
}>({
    state: initialState,
    dispatch: () => null,
    login: async() => (false),
    logout: () => null,
});
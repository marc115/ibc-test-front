import { create } from "zustand"
import { User } from "../models/User"
import { authLogin } from "../helpers/login";
import { mapErrorMessage } from "../../../util/map-error-message";

type LoginStore = {
    logged: boolean,
    user?: User,
    //Methods
    login: (email: string, password: string) => Promise<boolean>,
    logout: () => void,
}

function getUserFromStorage(): User | undefined {
    // Retrieve the item from local storage using the specified key
    const jsonString = localStorage.getItem('user');
    // If the item does not exist, return null
    if (!jsonString) {
        return undefined;
    }
    try {
        // Attempt to parse the JSON object
        return JSON.parse(jsonString) as User;
    } catch (e) {
        // If parsing fails, return null
        return undefined;
    }
}

export const useLoginStore = create<LoginStore>((set) => ({
    logged: false,
    user: getUserFromStorage(),
    //Methods
    login: async (email: string, password: string): Promise<boolean> => {
        const { user, status } = await authLogin(email, password);
        if (user && status === 200) {
            localStorage.setItem('user', JSON.stringify(user))
            set({ logged: true, user: user });
            return true;
        } else {
            const errorMessage = mapErrorMessage(status)
            //TODO: show snackbar saying that login failed
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('user');
        set({logged: false, user: undefined})
    }
}))
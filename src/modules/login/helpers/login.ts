import { Convert, User } from "../models/User";

// Function to fetch the user and return null on failure
export const authLogin = async (email: string, password: string): Promise<{ user: User | null, status: number }> => {
    const url = 'https://localhost:3000/auth/login'
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        // Return user data if the response is OK, otherwise return null
        if (response.ok) {
            const data = await response.json()
            const user = Convert.toUser(data);
            return { user: user, status: response.status };

        } else {
            return { user: null, status: response.status };
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return { user: null, status: 500 }; // Assume 500 in case of unknown errors
    }
}